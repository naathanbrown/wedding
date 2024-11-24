import { AllRsvp } from "../../components/allRsvp";
import { Navbar } from "../../components/navbar";
import ReceptionRsvp from "../../components/receptionRsvp";

export const RSVP = () => {
  const userType = localStorage.getItem("guest_type");

  return (
    <div className="App">
      <Navbar />
      {userType === "all" ? <AllRsvp /> : <ReceptionRsvp />}
    </div>
  );
};

export default RSVP;
