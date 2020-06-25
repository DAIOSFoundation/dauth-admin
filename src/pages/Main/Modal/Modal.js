import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const Modal = ({ children, visible }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisibal] = useState(visible); // 상태가 true->false로 전환되는걸 감지하는 state

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisibal(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;
  return (
    <ModalPage disappear={!visible}>
      <ModalWrap disappear={!visible}>{children}</ModalWrap>
    </ModalPage>
  );
};

export default Modal;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const ModalPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards; /* 애니메이션 끝나고 유지시켜주기 */
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const ModalWrap = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;
