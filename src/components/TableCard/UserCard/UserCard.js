import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import CheckBox from "../../CheckBox/CheckBox";
import Button from "../../Button/Button";

const UserCard = ({ usercode, user, email, date }) => {
  return (
    <TableRow>
      <CheckBoxWrap>
        <CheckBox />
      </CheckBoxWrap>
      <UserCode>{usercode}</UserCode>
      <UserName>{user}</UserName>
      <UserEmail>{email}</UserEmail>
      <RegisterDate>{date}</RegisterDate>
      <Actions>
        <Button>조회 요청</Button>
      </Actions>
    </TableRow>
  );
};

export default withRouter(UserCard);

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

const UserCode = styled.td`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const UserName = styled(UserCode)``;

const UserEmail = styled(UserCode)``;

const RegisterDate = styled(UserCode)``;

const Actions = styled(UserCode)`
  button {
    font-size: 12px;
    height: 30px;
  }
`;