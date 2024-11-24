import { FormLabel, TextField } from "@mui/material";

export const ReceptionRsvp = () => {
  return (
    <form>
      <div>
        <FormLabel>Username Reception</FormLabel>
        <TextField />
      </div>
      <div>
        <FormLabel>Password</FormLabel>
        <TextField />
      </div>
    </form>
  );
};

export default ReceptionRsvp;
