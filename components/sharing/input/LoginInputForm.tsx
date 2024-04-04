import React, { useState } from "react";
import styled from "styled-components";
import * as Icons from "@/components/sharing/Icons";
import { TLoginInput } from "@/utils/types";

type InputStyledProps = {
  $error?: boolean;
};

const TextInput = styled.input<InputStyledProps>`
  width: 100%;
  padding: 18px 15px 18px 15px;

  background-color: var(--color-white);
  border-radius: 8px;
  border: 1px solid
    ${({ $error }) => ($error ? "var(--color-red)" : "var(--color-gray3)")};
  box-sizing: border-box;

  &::placeholder {
    color: var(--color-gray4);
  }

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;
const PasswordInput = styled(TextInput)`
  padding-right: 30px;
`;

const PasswordInputContainer = styled.div`
  position: relative;
`;

const EyesButton = styled.div`
  position: absolute;
  top: 36%;
  right: 15px;
`;

const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ErrorMessage = styled.span`
  font-size: 14px;
  color: var(--color-red);
`;

const LoginInputForm = ({
  variant,
  error,
  label,
  placeholder,
  register,
}: TLoginInput) => {
  const [eyeOff, setEyeOff] = useState(true);

  switch (variant) {
    case "text":
      return (
        <LabelAndInput>
          <label htmlFor={label}>{label}</label>
          <TextInput
            type={variant}
            placeholder={placeholder}
            $error={!!error}
            {...register}
          />
          {error?.message ? <ErrorMessage>{error.message}</ErrorMessage> : null}
        </LabelAndInput>
      );
    case "password":
      return (
        <LabelAndInput>
          <label htmlFor={label}>{label}</label>
          <PasswordInputContainer>
            <PasswordInput
              type={eyeOff ? variant : "text"}
              placeholder={placeholder}
              $error={!!error}
              {...register}
            />
            <EyesButton
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                setEyeOff(!eyeOff);
              }}
            >
              {eyeOff ? <Icons.EyeOff /> : <Icons.EyeOn />}
            </EyesButton>
          </PasswordInputContainer>
          {error?.message ? <ErrorMessage>{error.message}</ErrorMessage> : null}
        </LabelAndInput>
      );
    default:
      return null;
  }
};

export default LoginInputForm;
