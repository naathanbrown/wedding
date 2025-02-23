import emailjs from "@emailjs/browser";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useState } from "react";

//@ts-ignore
export const ReceptionRsvp = ({ updateDisplayMessage, setLoading }) => {
  const defaultFromFields = {
    fullName: "",
    songRequest: "",
    dietaryRequirements: "",
  };
  const [formFields, setFormFields] = useState([defaultFromFields]);

  const handleFormChange = (event: any, index: number) => {
    let data = [...formFields];
    //@ts-ignore
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      fullName: "",
      songRequest: "",
      dietaryRequirements: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index: number) => {
    let data = [...formFields];
    if (data.length > 1) {
      data.splice(index, 1);
      setFormFields(data);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
      guest1_name: formFields[0].fullName,
      guest_list: formFields
        .map((field) => {
          return field.fullName;
        })
        .toString(),
      song_list: formFields
        .map((field) => {
          return field.songRequest;
        })
        .toString(),
      dietary_requirements: formFields
        .map((field) => {
          return field.dietaryRequirements;
        })
        .toString(),
    };
    emailjs
      .send("service_9vpwvcw", "template_ev851q6", templateParams, {
        publicKey: "Sgl7tZSNk6hEXI8J-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setFormFields([defaultFromFields]);
          updateDisplayMessage("success");
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
          updateDisplayMessage("failed");
        }
      );
  };

  return (
    <div style={{ margin: "2%" }}>
      <h1>RSVP</h1>
      <h4>
        Please indicate to use if you are able to attend the wedding. Please
        also let us know if you have a song request.
      </h4>
      <h4>
        In the evening a selection of pizza will be available for all guests to
        enjoy. Please indicate any dietary requirements in the form. More
        information is on the information page.
      </h4>
      <Card
        component="form"
        noValidate
        onSubmit={handleSubmit}
        variant="outlined"
      >
        <CardContent>
          {formFields.map((form, index) => {
            return (
              <div key={index} style={{ margin: "5%" }}>
                <Card>
                  <h3>Guest {index + 1}</h3>
                  <TextField
                    name="fullName"
                    placeholder="Name"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.fullName}
                  />
                  <TextField
                    name="songRequest"
                    placeholder="Song Request"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.songRequest}
                  />
                  <TextField
                    name="dietaryRequirements"
                    placeholder="Dietary Requirements"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.dietaryRequirements}
                  />
                  <br></br>
                  <Button onClick={() => removeFields(index)}>Remove</Button>
                </Card>
              </div>
            );
          })}
        </CardContent>
        <CardActions>
          <Button size="small" type="submit">
            Submit and RSVP
          </Button>
          <Button onClick={addFields}>Add Guest</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ReceptionRsvp;
