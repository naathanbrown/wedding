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
export const ReceptionRsvp = ({ updateDisplayMessage }) => {
  const defaultFromFields = { fullName: "", songRequest: "" };
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
    };
    emailjs
      .send("service_9vpwvcw", "template_ev851q6", templateParams, {
        publicKey: "Sgl7tZSNk6hEXI8J-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormFields([defaultFromFields]);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div style={{ margin: "10%" }}>
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
