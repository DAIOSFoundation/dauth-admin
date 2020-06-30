import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import CheckBox from "../../CheckBox/CheckBox";
import Button from "../../Button/Button";
import CancleModal from "../../../pages/Payment/Modal/CancleModal";

const PaymentCard = ({ paymentcode, user, email, amount, date }) => {
  const [cancleModal, setCancleModal] = useState(false);

  const onCancleModal = () => {
    setCancleModal(true);
  };
  const closeCancleModal = () => {
    setCancleModal(false);
  };
  return (
    <TableRow>
      <CheckBoxWrap>
        <CheckBox />
      </CheckBoxWrap>
      <PaymentCode>{paymentcode}</PaymentCode>
      <UserName>{user}</UserName>
      <UserEmail>{email}</UserEmail>
      <PayAmount>{amount}</PayAmount>
      <RegisterDate>{date}</RegisterDate>
      <Actions onClick={onCancleModal}>
        <Button>결제 취소</Button>
      </Actions>
      <CancleModal visible={cancleModal} isCloseModal={closeCancleModal} />
    </TableRow>
  );
};

export default withRouter(PaymentCard);

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

const PaymentCode = styled.td`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const UserName = styled(PaymentCode)``;

const UserEmail = styled(PaymentCode)``;

const PayAmount = styled(PaymentCode)``;

const RegisterDate = styled(PaymentCode)``;

const Actions = styled(PaymentCode)`
  button {
    font-size: 12px;
    height: 30px;
  }
`;
