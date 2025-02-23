import emailjs from "@emailjs/browser";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "../css/allRsvp.css";

//@ts-ignore
export const AllRsvp = ({ updateDisplayMessage, setLoading }) => {
  const defaultFromFields = {
    fullName: "",
    starter: "",
    main: "",
    dessert: "",
    songRequest: "",
    dietaryRequirements: "",
    attending: false,
  };
  const [formFields, setFormFields] = useState([defaultFromFields]);

  const handleFormChange = (event: any, index: number) => {
    let data = [...formFields];
    console.log(data);
    //@ts-ignore
    data[index][event.target.name] =
      event.target.name === "attending"
        ? event.target.checked
        : event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      fullName: "",
      starter: "",
      main: "",
      dessert: "",
      songRequest: "",
      dietaryRequirements: "",
      attending: false,
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
      dietary_requirements: formFields
        .map((field) => {
          return field.dietaryRequirements;
        })
        .toString(),
      attending: formFields
        .map((field) => {
          return field.attending;
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
          setLoading(false);
          setFormFields([defaultFromFields]);
          updateDisplayMessage("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          updateDisplayMessage("failed");
        }
      );
  };

  return (
    <div style={{ margin: "2%" }}>
      <h1>RSVP</h1>
      <h4>
        Please indicate to use if you are able to attend the wedding. Please
        also let us know if you have a song request and any dietary
        requirements.
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="attending"
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.attending}
                      />
                    }
                    label="Attending"
                  />
                  <br />
                  <TextField
                    name="fullName"
                    placeholder="Name"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.fullName}
                  />
                  <p>Starter</p>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="starter"
                    value={form.starter}
                    onChange={(event) => handleFormChange(event, index)}
                  >
                    <FormControlLabel
                      value="Soup"
                      control={<Radio />}
                      label="Tomato and Basil Soup with Crusty Bread (GF)"
                    />
                    <FormControlLabel
                      value="Salmon Salad"
                      control={<Radio />}
                      label="Smoked Salmon Salad (GF)"
                    />
                    <FormControlLabel
                      value="Halloumi"
                      control={<Radio />}
                      label="Grilled Halloumi Fries with Rocket and Sweet Chilli Sauce (GF)"
                    />
                  </RadioGroup>
                  <p>Main</p>
                  <p>All served with roast potatoes and seasonal vegetables</p>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="main"
                    value={form.main}
                    onChange={(event) => handleFormChange(event, index)}
                  >
                    <FormControlLabel
                      value="Beef"
                      control={<Radio />}
                      label="Roast Beef with Yorkshire Pudding (can be GF on req)"
                    />
                    <FormControlLabel
                      value="Salmon"
                      control={<Radio />}
                      label="Herb Crusted Salmon (GF)"
                    />
                    <FormControlLabel
                      value="lasagna"
                      control={<Radio />}
                      label="Vegetarian Lasagna"
                    />
                  </RadioGroup>
                  <p>Dessert</p>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="dessert"
                    value={form.dessert}
                    onChange={(event) => handleFormChange(event, index)}
                  >
                    <FormControlLabel
                      value="crumble"
                      control={<Radio />}
                      label="Apple & Blackberry Crumble Served with Ice Cream or Cream"
                    />
                    <FormControlLabel
                      value="Profiterole"
                      control={<Radio />}
                      label="Chocolate Profiterole Stack"
                    />
                    <FormControlLabel
                      value="Brownie"
                      control={<Radio />}
                      label="Salted Caramel Brownie with Ice Cream"
                    />
                  </RadioGroup>
                  <TextField
                    name="songRequest"
                    placeholder="Song Request"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.songRequest}
                  />
                  <br />
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

export default AllRsvp;
