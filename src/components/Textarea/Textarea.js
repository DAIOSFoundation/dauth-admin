import React from "react";
import styled from "styled-components";

const Textarea = ({ type, name, value, placeholder, onChange }) => {
  return (
    <TextareaTag
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textarea;

const TextareaTag = styled.textarea`
  min-width: 200px;
  height: 100%;
  margin: 0 16px;
  flex: 1;
  padding: 10px 10px;
  resize: none;
`;
