import React from "react";
import styled from "styled-components";
import { TChildren } from "@/utils/types";

type PopoverStyledProps = {
  $isOpen: boolean;
};

const PopoverContainer = styled.div<PopoverStyledProps>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 2px;

  width: 100px;
  height: 64px;
  background: white;

  position: absolute;
  right: -5%;
  top: 100%;
  z-index: 1;

  box-shadow: -1px 4px 4px 1px #3332361a;
  border-radius: 5px;
`;

type PopoverProps = TChildren & {
  isOpen: boolean;
};

const Popover = ({ children, isOpen }: PopoverProps) => {
  return <PopoverContainer $isOpen={isOpen}>{children}</PopoverContainer>;
};

export default Popover;
