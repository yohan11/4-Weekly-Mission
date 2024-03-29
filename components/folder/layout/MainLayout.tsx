import React, {ReactNode} from "react";
import styled from "styled-components";
import media from "@/styles/mediaSize.js";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;

  min-height: 1280px;

  padding: 4% 12%;

  background-color: var(--color-white);

  ${media.tablet` padding: 4% 32px;`}
  ${media.mobile`
    padding: 4% 32px;
    gap: 30px;`}

`;
const MainLayout = ({children}: { children: ReactNode }) => {
    return <Main>{children}</Main>;
};

export default MainLayout;
