import React from 'react';
import * as Icons from "@/components/sharing/Icons"
import styled from "styled-components";
import Link from "next/link";

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 24px;

  font-size: 14px;
  font-weight: 400;
  color: #373740;
  background-color: #E7EFFB;;
  border: 1px solid #CCD5E3;
  border-radius: 8px;
`

const StyledIconBox = styled.div`
  display: flex;
  gap: 16px;
`

const SocialLogin = ({message}: { message: string }) => {
    return (
        <SocialLoginContainer>
            {message}
            <StyledIconBox>
                <Link href="https://www.google.com"><Icons.LoginGoogle/></Link>
                <Link href="https://www.kakaocorp.com/page"><Icons.LoginKakao/></Link>
            </StyledIconBox>
        </SocialLoginContainer>
    );
};

export default SocialLogin;