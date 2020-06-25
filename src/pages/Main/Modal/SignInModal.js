import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const SignInModal = ({ visible, isCloseSignIn }) => {
  return (
    <Modal visible={visible}>
      <SignInModalPage>
        <Title>Sign In</Title>
        <Contents>
          <Info>
            <span>ID</span>
            <input type="text" />
          </Info>
          <Info>
            <span>Password</span>
            <input type="password" />
          </Info>
        </Contents>
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
