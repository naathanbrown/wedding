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
export const AllRsvp = ({ updateDisplayMessage }) => {
  const defaultFromFields = {
    fullName: "",
    starter: "",
    main: "",
    dessert: "",
    songRequest: "",
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
      starter: "",
      main: "",
      dessert: "",
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
      starters: formFields
        .map((field) => {
          return field.starter;
        })
        .toString(),
      mains: formFields
        .map((field) => {
          return field.main;
        })
        .toString(),
      desserts: formFields
        .map((field) => {
          return field.dessert;
        })
        .toString(),
      song_list: formFields
        .map((field) => {
          return field.songRequest;
        })
        .toString(),
    };
    emailjs
      .send("service_9vpwvcw", "template_wr8dd4n", templateParams, {
        publicKey: "Sgl7tZSNk6hEXI8J-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormFields([defaultFromFields]);
          updateDisplayMessage("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          updateDisplayMessage("failed");
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
                    name="starter"
                    placeholder="Starter"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.starter}
                  />
                  <TextField
                    name="main"
                    placeholder="Main"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.main}
                  />
                  <TextField
                    name="dessert"
                    placeholder="Dessert"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.dessert}
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

export default AllRsvp;
