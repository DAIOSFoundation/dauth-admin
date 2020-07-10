import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import CheckBox from "../../CheckBox/CheckBox";
import Button from "../../Button/Button";
import CustomerModal from "../../../pages/Customer/Modal/CustomerModal";

const UserCard = ({ id, user, email, createdAt }) => {
  const [customerModal, setCustomerModal] = useState(false);

  const onCustomerModal = () => {
    setCustomerModal(true);
  };
  const closeCancleModal = () => {
    setCustomerModal(false);
  };
  return (
    <TableRow>
      <CheckBoxWrap>
        <CheckBox />
      </CheckBoxWrap>
      <UserCode>{id}</UserCode>
      <UserName>{user}</UserName>
      <UserEmail>{email}</UserEmail>
      <RegisterDate>{createdAt}</RegisterDate>
      <Actions onClick={onCustomerModal}>
        <Button>조회 요청</Button>
      </Actions>
      <CustomerModal visible={customerModal} isCloseModal={closeCancleModal} />
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
