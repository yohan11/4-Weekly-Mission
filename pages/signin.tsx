import React, { useEffect, useState } from "react";
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
} from "@/utils/constants";
import { getMyInfo, postSignIn } from "@/utils/api";
import { useRouter } from "next/router";
import { useMyInfo } from "@/contexts/MyInfoContext";

const SignIn = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);
  const { setMyInfo } = useMyInfo();

  const loadMyInfo = async () => {
    const res = await getMyInfo();
    setMyInfo(res);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({ mode: "onBlur" });

  const onSubmitHandler = async (data: any) => {
    const token = await postSignIn(data);
    if (token) {
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("refreshToken", token.refreshToken);
      loadMyInfo();
      router.push("/folder");
    } else {
      setLoginError(true);
    }
  };

  const emailRegister = register("email", {
    required: { value: true, message: INPUT_EMAIL_MESSAGE },
    pattern: {
      value: EMAIL_REGEX,
      message: EMAIL_FORM_ERROR_MESSAGE,
    },
  });

  const passwordRegister = register("password", {
    required: { value: true, message: INPUT_PASSWORD_MESSAGE },
  });

  useEffect(() => {
    if (loginError) {
      setError("email", {
        type: "custom",
        message: "이메일을 확인해주세요.",
      });
      setError("password", {
        type: "custom",
        message: "비밀번호를 확인해주세요.",
      });
    }
  }, [loginError, setError]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) router.push("/folder");
  }, []);

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
          회원이 아니신가요?
          <Link href="/signup">
            <AS.StyledLink> 회원 가입하기 </AS.StyledLink>
          </Link>
        </span>
      </AS.StyledLogo>
      <AS.StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
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
          placeholder={INPUT_PASSWORD_MESSAGE}
          register={passwordRegister}
          error={errors.password as FieldError}
        />
        <Button variant="gradient" type="submit">
          로그인
        </Button>
      </AS.StyledForm>
      <SocialLogin message="소셜 로그인" />
    </AS.SignInContainer>
  );
};

export default SignIn;
