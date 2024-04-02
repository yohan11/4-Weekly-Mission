import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.span`
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 12px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 #00000040;

  position: fixed;
  bottom: -100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
const Toast = ({show}: { show: boolean }) => {
    return show ? <StyledBox>URL이 복사되었습니다.</StyledBox> : null;
};

export default Toast;