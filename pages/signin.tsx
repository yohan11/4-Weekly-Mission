import React from 'react';
import Image from "next/image";
import Link from "next/link";
import LoginInputForm from "@/components/sharing/input/LoginInputForm";
import Button from "@/components/sharing/Button";
import SocialLogin from "@/components/auth/SocialLogin";
import * as AS from "@/styles/auth";
import {FieldError, useForm} from "react-hook-form";
import {EMAIL_FORM_ERROR_MESSAGE, EMAIL_REGEX, INPUT_EMAIL_MESSAGE, INPUT_PASSWORD_MESSAGE} from "@/utils/authUtils";

const SignIn = () => {
    const {
        register, formState: {errors}, handleSubmit,
    } = useForm({mode: "onBlur"});

    const emailRegister = register("email", {
        required: {value: true, message: INPUT_EMAIL_MESSAGE},
        pattern: {
            value: EMAIL_REGEX,
            message: EMAIL_FORM_ERROR_MESSAGE,
        },
    })

    const passwordRegister = register("password", {
        required: {value: true, message: INPUT_PASSWORD_MESSAGE},
    })

    const onChangeFormLib = () => {
        console.log("로그인 정보");
    };

    return (
        <AS.SignInContainer>
            <AS.StyledLogo>
                <Link href="/">
                    <Image alt="Linkbrary logo" src="/icons/Linkbrary.svg" width={210.58} height={38}/>
                </Link>
                <span>회원이 아니신가요? <Link href="/signup"><AS.StyledLink> 회원 가입하기 </AS.StyledLink></Link></span>
            </AS.StyledLogo>
            <AS.StyledForm onSubmit={handleSubmit(onChangeFormLib)}>
                <LoginInputForm variant='text' label='이메일' placeholder={INPUT_EMAIL_MESSAGE} register={emailRegister}
                                error={errors.email as FieldError}/>
                <LoginInputForm variant='password' label='비밀번호' placeholder={INPUT_PASSWORD_MESSAGE}
                                register={passwordRegister} error={errors.password as FieldError}/>
                <Button variant="gradient"> 로그인 </Button>
            </AS.StyledForm>
            <SocialLogin message='소셜 로그인'/>
        </AS.SignInContainer>
    );
}

export default SignIn;