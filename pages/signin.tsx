import React from 'react';
import Image from "next/image";
import Link from "next/link";
import LoginInputForm from "@/components/sharing/input/LoginInputForm";
import Button from "@/components/sharing/Button";
import SocialLogin from "@/components/auth/SocialLogin";
import * as AS from "@/styles/auth";

const SignIn = () => {
    return (
        <AS.SignInContainer>
            <AS.StyledLogo>
                <Image alt="Linkbrary logo" src="/icons/Linkbrary.svg" width={210.58} height={38}/>
                <span>회원이 아니신가요? <Link href="/signup"><AS.StyledLink> 회원 가입하기 </AS.StyledLink></Link></span>
            </AS.StyledLogo>
            <AS.StyledForm>
                <LoginInputForm variant='text' label='이메일'/>
                <LoginInputForm variant='password' label='비밀번호'/>
                <Button variant="gradient"> 로그인 </Button>
            </AS.StyledForm>
            <SocialLogin message='소셜 로그인'/>
        </AS.SignInContainer>
    );
};

export default SignIn;