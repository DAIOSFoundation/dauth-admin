import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import SignInputBox from "../../../components/InputBox/SignInputBox";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as registerActions from "../../../store/modules/register/actions";
import { allResolved } from "q";

const SignUpModal = ({ visible, isCloseSignUp }) => {
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  //   rePassword: "",
  // });

  // const { email, password, rePassword } = inputs;
  // const onChange = (e) => {
  //   const { value, name } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };
  const { email, password, rePassword } = useSelector(
    (state) => ({
      email: state.register.email,
      password: state.register.password,
      rePassword: state.register.rePassword,
    }),
    shallowEqual
  );

  // const onSignUp = async () => {
  //   console.log("onSignUp: ", inputs);
  //   if (email === "" && password === "" && rePassword === "") {
  //     alert("정보 입력바람");
  //   }
  //   try {
  //     if (email.match(regExp) !== null && password === rePassword) {
  //       const res = await fetch(
  //         "http://192.168.1.45:4000/account/web/register",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             email: email,
  //             password: password,
  //           }),
  //         }
  //       );
  //       //const result = await res.json();

  //       if (res.status === 201) {
  //         alert("회원가입 성공");
  //         isCloseSignUp();
  //       }
  //     } else {
  //       alert("다시 입력해주세요");
  //       setInputs({
  //         email: "",
  //         password: "",
  //         rePassword: "",
  //       });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      dispatch(registerActions.change_email(value));
    } else if (name === "password") {
      dispatch(registerActions.change_password(value));
    } else {
      dispatch(registerActions.change_rePassword(value));
    }
  };

  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const onSignUp = useCallback(() => {
    const params = {
      email,
      password,
      rePassword,
    };
    if (email.match(regExp) !== null && password === rePassword) {
      dispatch(registerActions.post_register(params));
      alert("회웝가입 성공하셨습니다.");
      isCloseSignUp();
    } else if (email === "" && password === "" && rePassword === "") {
      alert("정보를 입력해 주세요");
    } else if (password !== rePassword) {
      alert("비밀번호가 다릅니다. 다시 입력해주세요.");
    } else {
      alert("회원가입에 실패했습니다.");
    }
  }, [email, password, rePassword]);
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
