import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../../components/Modal/Modal";
import SignInputBox from "../../../components/InputBox/SignInputBox";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/Button/SecondaryButton";

const SignInModal = ({ visible, isCloseSignIn }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;
  const history = useHistory();

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLogin = async () => {
    console.log("onLogin: ", inputs);
    try {
      const res = await fetch("http://192.168.1.45:4000/account/web/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const result = await res.json();
      console.log("res: ", result);
      if (result.Authentication) {
        history.push("/product/status");
        localStorage.setItem("access_token", result.Authentication);
        isCloseSignIn();
      } else {
        alert("정보를 잘못 입력 하셨습니다. 다시 입력해 주세요.");
        setInputs({
          email: "",
          password: "",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal visible={visible}>
      <SignInModalPage>
        <Title>SignIn</Title>
        <Wrapper>
          <Contents>
            <Info>
              <span>Email</span>
              <SignInputBox
                type="text"
                name="email"
                value={email}
                placeholder="Email를 입력하세요."
                onChange={onChange}
              />
            </Info>
            <Info>
              <span>Password</span>
              <SignInputBox
                type="password"
                name="password"
                value={password}
                placeholder="password 입력하세요."
                onChange={onChange}
              />
            </Info>
          </Contents>
          <ButtonBox>
            <ButtonWrap onClick={onLogin}>
              <Button>로그인</Button>
            </ButtonWrap>
            <ButtonWrap onClick={isCloseSignIn}>
              <SecondaryButton>취소</SecondaryButton>
            </ButtonWrap>
          </ButtonBox>
        </Wrapper>
      </SignInModalPage>
    </Modal>
  );
};

export default SignInModal;

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
