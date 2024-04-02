import React from 'react';
import Image from "next/image";
import Link from "next/link";
import LoginInputForm from "@/components/sharing/input/LoginInputForm";
import styled, {css} from "styled-components";
import Button from "@/components/sharing/Button";
import SocialLogin from "@/components/auth/SocialLogin";

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

const SignInContainer = styled.div`
  width: 30%;
  margin: auto;

  ${flexColumn};
  justify-content: center;
  gap: 30px;

  position: absolute;
  inset: 0;
`

const StyledLogo = styled.div`
  ${flexColumn};
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const StyledForm = styled.form`
  ${flexColumn};
  gap: 30px
`

const StyledLink = styled.span`
  text-decoration: underline;
  color: var(--color-primary)`

const SignIn = () => {
    return (
        <SignInContainer>
            <StyledLogo>
                <Image alt="Linkbrary logo" src="/icons/Linkbrary.svg" width={210.58} height={38}/>
                <span>회원이 아니신가요? <Link href="/signup"><StyledLink> 회원 가입하기 </StyledLink></Link></span>
            </StyledLogo>
            <StyledForm>
                <LoginInputForm variant='text' label='이메일'/>
                <LoginInputForm variant='password' label='비밀번호'/>
                <Button variant="gradient"> 로그인 </Button>
            </StyledForm>
            <SocialLogin/>
        </SignInContainer>
    );
};

export default SignIn;