import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import CheckBox from "../../CheckBox/CheckBox";
import Button from "../../Button/Button";

const ProductCard = ({ idx, id, title, date }) => {
  return (
    <TableRow>
      <CheckBoxWrap>
        <CheckBox />
      </CheckBoxWrap>
      <ProductName>{title}</ProductName>
      <RegisterDate>{date}</RegisterDate>
      <Actions>
        <Button>삭제</Button>
      </Actions>
    </TableRow>
  );
};

export default withRouter(ProductCard);

const TableRow = styled.tr`
  border-bottom: 1px solid black;
  height: 50px;
`;

const CheckBoxWrap = styled.td`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 10%;
`;

const ProductName = styled.td`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const RegisterDate = styled(ProductName)``;

const Actions = styled(ProductName)`
  button {
    font-size: 12px;
    height: 30px;
  }
`;
