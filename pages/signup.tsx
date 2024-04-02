import React from 'react';
import Image from "next/image";
import Link from "next/link";
import LoginInputForm from "@/components/sharing/input/LoginInputForm";
import Button from "@/components/sharing/Button";
import SocialLogin from "@/components/auth/SocialLogin";
import * as AS from "@/styles/auth";


const SignUp = () => {
    return (
        <AS.SignInContainer>
            <AS.StyledLogo>
                <Image alt="Linkbrary logo" src="/icons/Linkbrary.svg" width={210.58} height={38}/>
                <span>이미 회원이신가요? <Link href="/signin"><AS.StyledLink> 로그인 하기 </AS.StyledLink></Link></span>
            </AS.StyledLogo>
            <AS.StyledForm>
                <LoginInputForm variant='text' label='이메일'/>
                <LoginInputForm variant='password' label='비밀번호'/>
                <LoginInputForm variant='password' label='비밀번호 확인'/>
                <Button variant="gradient"> 회원가입 </Button>
            </AS.StyledForm>
            <SocialLogin message='다른 방식으로 가입하기'/>
        </AS.SignInContainer>
    );
};

export default SignUp;