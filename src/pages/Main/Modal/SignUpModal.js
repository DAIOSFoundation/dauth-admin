import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../../components/Modal/Modal";
import SignInputBox from "../../../components/InputBox/SignInputBox";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/Button/SecondaryButton";

const SignUpModal = ({ visible, isCloseSignUp }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const { email, password, rePassword } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignUp = () => {
    console.log("onSignUp: ", inputs);
    setInputs({
      email: "",
      password: "",
      rePassword: "",
    });
    isCloseSignUp();
  };

  return (
    <Modal visible={visible}>
      <SignInModalPage>
        <Title>SignUp</Title>
        <Wrapper>
          <Contents>
            <Info>
              <span>Email</span>
              <SignInputBox
                type="text"
                name="email"
                value={email}
                placeholder="email을 입력해주세요."
                onChange={onChange}
              />
            </Info>
            <Info>
              <span>Password</span>
              <SignInputBox
                type="password"
                name="password"
                value={password}
                placeholder="비밀번호를 입력해주세요."
                onChange={onChange}
              />
            </Info>
            <Info>
              <span>Confirm Password</span>
              <SignInputBox
                type="password"
                name="rePassword"
                value={rePassword}
                placeholder="비밀번호를 입력해주세요."
                onChange={onChange}
              />
            </Info>
          </Contents>
          <ButtonBox>
            <ButtonWrap onClick={onSignUp}>
              <Button>회원가입</Button>
            </ButtonWrap>
            <ButtonWrap onClick={isCloseSignUp}>
              <SecondaryButton>취소</SecondaryButton>
            </ButtonWrap>
          </ButtonBox>
        </Wrapper>
      </SignInModalPage>
    </Modal>
  );
};

export default SignUpModal;

const SignInModalPage = styled.div`
  position: relative;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  position: absolute;
  top: -30px;
  width: 90%;
  padding: 20px 0;
  background: #3f51b5;
  border-radius: 4px;
  font-size: 26px;
  color: #ffffff;
  text-align: center;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Contents = styled.div`
  padding: 15px 13px;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0;
  span {
    min-width: 90px;
    margin: 0 20px;
    font-size: 21px;
    line-height: 1.4;
  }
  input {
    min-width: 200px;
    flex: 1;
    margin: 0 16px;
    padding: 10px 10px;
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
  width: 40%;
  margin: 0 10px;
`;
