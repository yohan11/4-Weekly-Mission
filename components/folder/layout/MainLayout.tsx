import React from "react";
import styled from "styled-components";
import { media } from "@/styles/device";
import { TChildren } from "@/utils/types";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;

  min-height: 1280px;

  padding: 4% 12%;

  background-color: var(--color-white);

  @media ${media.tablet} {
    padding: 4% 32px;
  }
  @media ${media.mobile} {
    padding: 4% 32px;
    gap: 30px;
  }
`;
const MainLayout = ({ children }: TChildren) => {
  return <Main>{children}</Main>;
};

export default MainLayout;
