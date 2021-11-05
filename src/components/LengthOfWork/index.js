import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function LengthOfWork() {
  return (
    <FormControl component="fieldset">
      <RadioGroup>
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="0 - 3 months"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="3 - 6 months"
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="6 - 12 months"
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="over 12 months"
        />
      </RadioGroup>
    </FormControl>
  );
}
