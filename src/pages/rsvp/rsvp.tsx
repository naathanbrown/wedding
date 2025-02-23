import { Alert } from "@mui/material";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { AllRsvp } from "../../components/allRsvp";
import { Navbar } from "../../components/navbar";
import ReceptionRsvp from "../../components/receptionRsvp";

export const RSVP = () => {
  const userType = localStorage.getItem("guest_type");
  const [displayMessage, setDisplayMessage] = useState("");
  let [loading, setLoading] = useState(false);

  const updateDisplayMessage = (displayMessage: string) => {
    setDisplayMessage(displayMessage);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="image-container">
        <img id="header-image" src="floral_header4.jpg" alt="flowers" />
      </div>
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
      {!loading && (
        <div id="rsvp-container">
          {userType === "all" ? (
            <AllRsvp
              updateDisplayMessage={updateDisplayMessage}
              setLoading={setLoading}
            />
          ) : (
            <ReceptionRsvp
              updateDisplayMessage={updateDisplayMessage}
              setLoading={setLoading}
            />
          )}
        </div>
      )}
      <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        padding-top="30%"
      />
    </div>
  );
};

export default RSVP;
