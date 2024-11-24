import { Alert } from "@mui/material";
import { useState } from "react";
import { AllRsvp } from "../../components/allRsvp";
import { Navbar } from "../../components/navbar";
import ReceptionRsvp from "../../components/receptionRsvp";

export const RSVP = () => {
  const userType = localStorage.getItem("guest_type");
  const [displayMessage, setDisplayMessage] = useState("");

  const updateDisplayMessage = (displayMessage: string) => {
    setDisplayMessage(displayMessage);
  };

  return (
    <div className="App">
      <Navbar />
      {displayMessage === "success" && (
        <Alert severity="success">
          Your RSVP was successful, we look forward to seeing you on the day!
        </Alert>
      )}
      {displayMessage === "failed" && (
        <Alert severity="error">
          Your RSVP failed, please try again and if not, contact Nathan or
          Samantha directly.
        </Alert>
      )}
      {userType === "all" ? (
        <AllRsvp updateDisplayMessage={updateDisplayMessage} />
      ) : (
        <ReceptionRsvp updateDisplayMessage={updateDisplayMessage} />
      )}
    </div>
  );
};

export default RSVP;
