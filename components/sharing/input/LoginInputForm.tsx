import React, {useRef, useState} from 'react';
import styled from "styled-components";
import * as Icons from "@/components/sharing/Icons"
import Button from "@/components/sharing/Button";

type InputStyledProps = {
    $error?: boolean
}

const TextInput = styled.input<InputStyledProps>`
  width: 100%;
  padding: 18px 15px 18px 15px;

  background-color: var(--color-white);
  border-radius: 8px;
  border: 1px solid ${({$error}) => $error ? 'var(--color-red)' : 'var(--color-gray3)'};
  box-sizing: border-box;

  &::placeholder {
    color: var(--color-gray4);
  }

  &:focus {
    border: 1px solid var(--color-primary);
  }
`
const PasswordInput = styled(TextInput)`
  padding-right: 30px`

const PasswordInputContainer = styled.div`
  position: relative;
`

const EyesButton = styled(Button)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
`

const ErrorMessage = styled.span`
  font-size: 14px;
  color: var(--color-red)`

interface InputProps {
    variant: 'text' | 'password'
    error?: boolean
}

const LoginInputForm = ({variant, error}: InputProps) => {
    const [eyeOff, setEyeOff] = useState(true);
    const passwordRef = useRef<HTMLInputElement>(null);

    const toggleEyesButton = () => {
        if (passwordRef.current) {
            if (eyeOff) {
                passwordRef.current.type = 'text';
                setEyeOff(false);
            } else {
                passwordRef.current.type = 'password';
                setEyeOff(true);
            }
        }
    }

    switch (variant) {
        case "text":
            return (
                <>
                    <TextInput type={variant} placeholder='내용 입력' $error={error}
                               onBlur={() => console.log("focusOut")}/>
                    {error ? <ErrorMessage>아이디를 다시 입력해주세요</ErrorMessage> : null}
                </>
            )
        case "password":
            return (
                <>
                    <PasswordInputContainer>
                        <PasswordInput type={variant} placeholder='내용 입력' ref={passwordRef} $error={error}
                                       onBlur={() => console.log("focusOut")}/>
                        <EyesButton variant='icon' onClick={toggleEyesButton}>
                            {eyeOff ? <Icons.EyeOff/> : <Icons.EyeOn/>}
                        </EyesButton>
                    </PasswordInputContainer>
                    {error ? <ErrorMessage>비밀번호를 다시 입력해주세요</ErrorMessage> : null}</>)
        default:
            return null
    }

};

export default LoginInputForm;