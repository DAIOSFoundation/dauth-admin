import React from "react";
import Input from "@material-ui/core/Input";

export default function Inputs({ handleInput }) {
  return (
    <Input
      onChange={handleInput}
      defaultValue=""
      inputProps={{ "aria-label": "description" }}
    />
  );
}
