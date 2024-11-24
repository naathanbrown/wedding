import { FormLabel, TextField } from "@mui/material";

export const AllRsvp = () => {
  return (
    <div>
      <form>
        <div>
          <FormLabel>Username</FormLabel>
          <TextField />
        </div>
        <div>
          <FormLabel>Password</FormLabel>
          <TextField />
        </div>
      </form>
    </div>
  );
};

export default AllRsvp;
