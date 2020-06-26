import React from "react";
import styled from "styled-components";

const ProductInputBox = ({
  className,
  type,
  name,
  value,
  placeholder,
  onChange,
  style,
}) => {
  return (
    <ProductInputBoxTag
      className={className}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={style}
    />
  );
};

export default ProductInputBox;

const ProductInputBoxTag = styled.input`
  min-width: 200px;
  margin: 0 16px;
  padding: 10px 10px;
  flex: 1;
`;
