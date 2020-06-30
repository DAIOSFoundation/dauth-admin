import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../components/Modal/Modal";
import DefaultButton from "../../../components/Button/DefaultButton";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import CheckBox from "../../../components/CheckBox/CheckBox";

const CustomerModal = ({ visible, isCloseModal }) => {
  const [checkedValue, setCheckedValue] = useState([]);
  const customerList = [
    {
      id: 1,
      text: "이메일",
    },
    {
      id: 2,
      text: "이름",
    },
    {
      id: 3,
      text: "연락처",
    },
    {
      id: 4,
      text: "카드정보",
    },
    {
      id: 5,
      text: "이용 목적",
    },
    {
      id: 6,
      text: "이용 기간",
    },
  ];

  const handleChecked = (e) => {
    const { value } = e.target;
    console.log("value,", value);
    setCheckedValue(
      checkedValue.includes(value)
        ? checkedValue.filter((c) => c !== value)
        : [...checkedValue, value]
    );
  };

  const handleComplete = () => {};

  return (
    <Modal visible={visible}>
      <CustomerModalPage>
        <Title>조회요청</Title>
        <Wrapper>
          <Contents>
            {customerList.map((list) => {
              return (
                <CheckBoxWrap key={list.id}>
                  <CheckBox label={list} onChange={() => handleChecked(list)} />
                  <span>{list.text}</span>
                </CheckBoxWrap>
              );
            })}
          </Contents>
          <ButtonBox>
            <ButtonWrap>
              <DefaultButton onClick={handleComplete}>확인</DefaultButton>
            </ButtonWrap>
            <ButtonWrap onClick={isCloseModal}>
              <SecondaryButton>취소</SecondaryButton>
            </ButtonWrap>
          </ButtonBox>
        </Wrapper>
      </CustomerModalPage>
    </Modal>
  );
};

export default CustomerModal;

const CustomerModalPage = styled.div`
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

const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
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
