import { Box, Button, TextField } from "@mui/material";
import "./index.css";

const JournryForm = (props) => {
  return (
    <Box component="form" className="form-box">
      <TextField id="outlined-basic" label="Where to" variant="outlined" />
      <TextField id="outlined-basic" label="When" variant="outlined" />
      <TextField id="outlined-basic" label="Total Member" variant="outlined" />
      <Button variant="contained">Start a trip</Button>
    </Box>
  );
};

export default JournryForm;
