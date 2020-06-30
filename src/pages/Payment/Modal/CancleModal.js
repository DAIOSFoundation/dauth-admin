import React from "react";
import styled from "styled-components";
import Modal from "../../../components/Modal/Modal";
import DefaultButton from "../../../components/Button/DefaultButton";
import SecondaryButton from "../../../components/Button/SecondaryButton";

const CancleModal = ({ visible, isCloseModal }) => {
  return (
    <Modal visible={visible}>
      <CancleModalPage>
        <Title>결제취소</Title>
        <Wrapper>
          <Contents>
            <span>결제를 취소하시겠습니까?</span>
          </Contents>
          <ButtonBox>
            <ButtonWrap>
              <DefaultButton>확인</DefaultButton>
            </ButtonWrap>
            <ButtonWrap onClick={isCloseModal}>
              <SecondaryButton>취소</SecondaryButton>
            </ButtonWrap>
          </ButtonBox>
        </Wrapper>
      </CancleModalPage>
    </Modal>
  );
};

export default CancleModal;

const CancleModalPage = styled.div`
  position: relative;
  padding: 50px 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  position: absolute;
  top: -30px;
  width: 75%;
  padding: 20px 0;
  background: #3f51b5;
  border-radius: 4px;
  font-size: 22px;
  color: #ffffff;
  text-align: center;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Contents = styled.div`
  padding: 15px 13px;
  width: 100%;
  text-align: center;
  span {
    font-size: 18px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 13px;
  width: 100%;
  button {
    width: 100%;
    margin: 0;
    padding: 9px 0;
    span {
      font-size: 20px;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100px;
  margin: 0 10px;
`;
