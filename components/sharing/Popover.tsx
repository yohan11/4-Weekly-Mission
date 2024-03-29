import React, {ReactNode} from "react";
import styled from "styled-components";

type PopoverStyledProps = {
    $isOpen: boolean;
};

const PopoverContainer = styled.div<PopoverStyledProps>`
  display: ${({$isOpen}) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 2px;

  width: 100px;
  height: 64px;
  background: white;

  position: absolute;
  right: -20%;
  top: 100%;
  z-index: 1;

  box-shadow: 0 2px 8px 0 #3332361a;
`;

interface PopoverProps {
    children: ReactNode;
    isOpen: boolean;
}

const Popover = ({children, isOpen}: PopoverProps) => {
    return <PopoverContainer $isOpen={isOpen}>{children}</PopoverContainer>;
};

export default Popover;
