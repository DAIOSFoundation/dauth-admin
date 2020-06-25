import React from "react";
import Input from "@material-ui/core/Input";

export default function SignInputBox({
  type,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      inputProps={{ "aria-label": "description" }}
    />
  );
}
