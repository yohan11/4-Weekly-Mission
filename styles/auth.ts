import styled, {css} from "styled-components";

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

export const SignInContainer = styled.div`
  width: 30%;
  margin: auto;

  ${flexColumn};
  justify-content: center;
  gap: 30px;

  position: absolute;
  inset: 0;

  min-width: 300px;
`

export const StyledLogo = styled.div`
  ${flexColumn};
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const StyledForm = styled.form`
  ${flexColumn};
  gap: 30px
`

export const StyledLink = styled.span`
  text-decoration: underline;
  color: var(--color-primary)`