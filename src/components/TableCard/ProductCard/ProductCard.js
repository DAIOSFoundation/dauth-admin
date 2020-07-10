import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import CheckBoxEach from "../../CheckBox/CheckBoxEach";
import Button from "../../Button/Button";
import RemoveModal from "../../../pages/Product/Modal/RemoveModal";

const ProductCard = ({
  idx,
  id,
  title,
  date,
  checkBoxEach,
  handleCheckBoxEach,
}) => {
  const [removeModal, setRemoveModal] = useState(false);

  const onRemoveModal = () => {
    setRemoveModal(true);
  };
  const closeRemoveModal = () => {
    setRemoveModal(false);
  };
  return (
    <TableRow>
      <CheckBoxWrap>
        <CheckBoxEach
          id={id}
          idx={idx}
          checkBoxEach={checkBoxEach}
          handleCheckBoxEach={handleCheckBoxEach}
        />
      </CheckBoxWrap>
      <ProductName>{title}</ProductName>
      <RegisterDate>{date}</RegisterDate>
      <Actions onClick={onRemoveModal}>
        <Button>삭제</Button>
      </Actions>
      <RemoveModal visible={removeModal} isCloseModal={closeRemoveModal} />
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
