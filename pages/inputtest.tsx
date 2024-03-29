import React from 'react';
import Header from "@/components/sharing/Header";
import LoginInputForm from "@/components/sharing/input/LoginInputForm";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 20%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`
const InputTest = () => {
    return (
        <>
            <Header userInfo={null} fixed={true}/>
            <InputContainer>
                <LoginInputForm variant='text'/>
                <LoginInputForm variant='password'/>
                <LoginInputForm variant='text' error={true}/>
                <LoginInputForm variant='password' error={true}/>
            </InputContainer>
        </>
    );
};

export default InputTest;