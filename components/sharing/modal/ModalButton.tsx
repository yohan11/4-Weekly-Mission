import React, {MouseEventHandler, ReactNode} from "react";
import styled from "styled-components";

type ModalButtonStyledProps = {
    $buttonStyle: "red" | "blue";
};

const StyledButton = styled.button<ModalButtonStyledProps>`
  width: 280px;
  padding: 16px 20px;
  border-radius: 8px;
  border: none;
  background: ${({$buttonStyle}) =>
          $buttonStyle === "blue"
                  ? "linear-gradient(90.99deg, #6D6AFE 0.12%, #6AE3FE 101.84%)"
                  : "var(--color-red)"};
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

interface ModalButtonProps {
    children: ReactNode;
    buttonStyle: "red" | "blue";
    onClick?: MouseEventHandler<HTMLElement>;
}

const ModalButton = ({children, buttonStyle, onClick}: ModalButtonProps) => {
    return (
        <StyledButton onClick={onClick} $buttonStyle={buttonStyle}>
            {children}
        </StyledButton>
    );
}

export default ModalButton;
