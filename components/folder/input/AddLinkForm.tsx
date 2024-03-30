import React from "react";
import styled from "styled-components";
import Button from "@/components/sharing/Button";
import {Link} from "@/components/sharing/Icons"
import {media} from "@/styles/device";

const LinkIcon = styled(Link)`
  position: absolute;
  left: 20px;
  top: 30%;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const AddLinkFormContainer = styled.div`
  position: relative;
  width: 60%;
  margin: auto;
  text-align: center;

  ${Input} {
    padding: 20px 104px 20px 50px;

    background-color: var(--color-white);

    border: 1px solid var(--color-primary);
    border-radius: 15px;
  }

  @media ${media.tablet} {
    width: 100%;
  }
  @media ${media.mobile} {
    width: 100%;
  }
`;

const AddLinkButton = styled(Button)`
  position: absolute;
  top: 20%;
  bottom: 20%;
  right: 2%;

  padding: 10px 16px;
`;

const AddLinkForm = () => {
    return (
        <AddLinkFormContainer>
            <LinkIcon/>
            <AddLinkButton variant="gradient">추가하기</AddLinkButton>
            <Input type="text" placeholder="링크를 추가해 보세요."/>
        </AddLinkFormContainer>
    );
};

export default AddLinkForm;
