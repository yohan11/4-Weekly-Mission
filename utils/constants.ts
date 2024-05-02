// 유저 기능 관련 상수

import { TLink } from "@/utils/types";

export const EMAIL_REGEX = /^\S+@\S+$/i;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/i;

export const INPUT_EMAIL_MESSAGE = "이메일을 입력해 주세요.";
export const INPUT_PASSWORD_MESSAGE = "비밀번호를 입력해 주세요.";

export const EMAIL_FORM_ERROR_MESSAGE = "올바른 이메일 주소가 아닙니다.";
export const PASSWORD_FORM_MESSAGE =
  "영문, 숫자를 조합해 8자 이상 입력해 주세요.";
export const PASSWORD_CONFIRM_ERROR_MESSAGE = "비밀번호가 일치하지 않아요";

// UI 관련 상수
export const AVATAR_DEFAULT_SIZE = 28;

// API 관련 함수
export const HTTP_ERROR = (error: Error) => {
  return new Error(`HTTP 에러 - ${error.message}`);
};
export const NETWORK_ERROR = (error: Error) => {
  return new Error(`NETWORK 에러 - ${error.message}`);
};
export const ERROR_400_MESSAGE = "Request failed with status code 400";
export const ERROR_409_MESSAGE = "Request failed with status code 409";

export const FILTER_LINKS = (data: TLink[], keyword: string) => {
  return data.filter(
    (item) =>
      (item.description && item.description.toLowerCase().includes(keyword)) ||
      (item.title && item.title.toLowerCase().includes(keyword)) ||
      (item.url && item.url.toLowerCase().includes(keyword)),
  );
};
