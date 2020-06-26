import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";

const TableCard = () => {
  return (
    <TableRow>
      <CheckBoxWrap>
        <CheckBox />
      </CheckBoxWrap>
      <ProductName>One</ProductName>
      <RegisterDate>20.06.30 13:00</RegisterDate>
      <Actions>
        <Button>삭제</Button>
      </Actions>
    </TableRow>
  );
};

export default withRouter(TableCard);

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
