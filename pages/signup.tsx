import React from "react";
import Image from "next/image";
import Link from "next/link";
import LoginInputForm from "@/components/sharing/input/LoginInputForm";
import Button from "@/components/sharing/Button";
import SocialLogin from "@/components/auth/SocialLogin";
import * as AS from "@/styles/auth";
import { FieldError, useForm } from "react-hook-form";
import {
  EMAIL_FORM_ERROR_MESSAGE,
  EMAIL_REGEX,
  INPUT_EMAIL_MESSAGE,
  INPUT_PASSWORD_MESSAGE,
  PASSWORD_CONFIRM_ERROR_MESSAGE,
  PASSWORD_FORM_MESSAGE,
  PASSWORD_REGEX,
} from "@/utils/constants";
import { checkEmail, postSignUp } from "@/utils/api";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "onBlur" });

  const emailRegister = register("email", {
    required: { value: true, message: INPUT_EMAIL_MESSAGE },
    pattern: {
      value: EMAIL_REGEX,
      message: EMAIL_FORM_ERROR_MESSAGE,
    },
    validate: async (value) => {
      const res = await checkEmail(value);
      if (!res) return "이미 존재하는 이메일입니다.";
    },
  });

  const passwordRegister = register("password", {
    required: { value: true, message: INPUT_PASSWORD_MESSAGE },
    pattern: {
      value: PASSWORD_REGEX,
      message: "비밀번호는 " + PASSWORD_FORM_MESSAGE,
    },
  });

  const passwordCheckRegister = register("passwordCheck", {
    required: { value: true, message: PASSWORD_CONFIRM_ERROR_MESSAGE },
    validate: (value) => {
      if (watch("password") !== value) return PASSWORD_CONFIRM_ERROR_MESSAGE;
    },
  });

  const onChangeFormLib = async (data: any) => {
    const token = await postSignUp(data);
    if (token) {
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("refreshToken", token.refreshToken);
      router.push("/folder");
    }
  };

  return (
    <AS.SignInContainer>
      <AS.StyledLogo>
        <Link href="/">
          <Image
            alt="Linkbrary logo"
            src="/icons/Linkbrary.svg"
            width={210.58}
            height={38}
          />
        </Link>
        <span>
          이미 회원이신가요?{" "}
          <Link href="/signin">
            <AS.StyledLink> 로그인 하기 </AS.StyledLink>
          </Link>
        </span>
      </AS.StyledLogo>
      <AS.StyledForm onSubmit={handleSubmit(onChangeFormLib)}>
        <LoginInputForm
          variant="text"
          label="이메일"
          placeholder={INPUT_EMAIL_MESSAGE}
          register={emailRegister}
          error={errors.email as FieldError}
        />
        <LoginInputForm
          variant="password"
          label="비밀번호"
          placeholder={PASSWORD_FORM_MESSAGE}
          register={passwordRegister}
          error={errors.password as FieldError}
        />
        <LoginInputForm
          variant="password"
          label="비밀번호 확인"
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          register={passwordCheckRegister}
          error={errors.passwordCheck as FieldError}
        />
        <Button variant="gradient"> 회원가입 </Button>
      </AS.StyledForm>
      <SocialLogin message="다른 방식으로 가입하기" />
    </AS.SignInContainer>
  );
};

export default SignUp;
