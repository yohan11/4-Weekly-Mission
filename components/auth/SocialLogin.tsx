import React from 'react';
import * as Icons from "@/components/sharing/Icons"
import styled from "styled-components";

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

const SocialLogin = () => {
    return (
        <SocialLoginContainer>
            소셜로그인
            <StyledIconBox><Icons.LoginGoogle/><Icons.LoginKakao/></StyledIconBox>
        </SocialLoginContainer>
    );
};

export default SocialLogin;