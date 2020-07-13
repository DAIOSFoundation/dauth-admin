import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes({
  checkBoxEach,
  id,
  idx,
  handleCheckBoxEach,
}) {
  return (
    <div>
      {/* <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      /> */}
      <Checkbox
        color="primary"
        checked={checkBoxEach}
        onChange={() => handleCheckBoxEach(id, idx)}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
      <Checkbox disabled inputProps={{ "aria-label": "disabled checkbox" }} />
      <Checkbox
        disabled
        checked
        inputProps={{ "aria-label": "disabled checked checkbox" }}
      />
      <Checkbox
        defaultChecked
        indeterminate
        inputProps={{ "aria-label": "indeterminate checkbox" }}
      />
      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
      <Checkbox
        defaultChecked
        size="small"
        inputProps={{ "aria-label": "checkbox with small size" }}
      /> */}
    </div>
  );
}
