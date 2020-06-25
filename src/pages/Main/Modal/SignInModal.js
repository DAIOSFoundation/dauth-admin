import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Button from "../../../components/Button/Button";

const SignInModal = ({ visible, isCloseSignIn }) => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      [name]: value,
    });
  };

  const onLogin = () => {
    setInputs({
      id: "",
      password: "",
    });
    isCloseSignIn();
  };

  return (
    <Modal visible={visible}>
      <SignInModalPage>
        <Title>SignIn</Title>
        <Wrapper>
          <Contents>
            <Info>
              <span>ID</span>
              <input
                type="text"
                name="id"
                value={id}
                placeholder="ID를 입력하세요."
                onChange={onChange}
              />
            </Info>
            <Info>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password를 입력하세요."
                onChange={onChange}
              />
            </Info>
          </Contents>
          <ButtonBox onClick={onLogin}>
            <Button>로그인</Button>
          </ButtonBox>
        </Wrapper>
      </SignInModalPage>
    </Modal>
  );
};

export default SignInModal;

const SignInModalPage = styled.div`
  position: relative;
  padding: 35px 0;
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
    font-size: 21px;
    line-height: 1.4;
  }
  input {
    min-width: 200px;
    margin: 0 16px;
    flex: 1;
    padding: 10px 10px;
  }
`;

const ButtonBox = styled.div`
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
