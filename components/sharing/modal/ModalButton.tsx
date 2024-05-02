import React from "react";
import styled from "styled-components";
import { TChildren } from "@/utils/types";

type ModalButtonStyledProps = {
  $buttonStyle: "red" | "blue";
};

const StyledButton = styled.button<ModalButtonStyledProps>`
  width: 280px;
  padding: 16px 20px;
  border-radius: 8px;
  border: none;
  background: ${({ $buttonStyle }) =>
    $buttonStyle === "blue"
      ? "linear-gradient(90.99deg, #6D6AFE 0.12%, #6AE3FE 101.84%)"
      : "var(--color-red)"};
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

type ModalButtonProps = TChildren & {
  buttonStyle: "red" | "blue";
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
};

const ModalButton = ({ children, buttonStyle, onClick }: ModalButtonProps) => {
  return (
    <StyledButton onClick={onClick} $buttonStyle={buttonStyle}>
      {children}
    </StyledButton>
  );
};

export default ModalButton;
