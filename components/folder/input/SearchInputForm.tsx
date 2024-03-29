import React, {useRef, useState} from "react";
import styled from "styled-components";
import * as Icons from "@/components/sharing/Icons";
import Button from "@/components/sharing/Button";
import {useRouter} from "next/router";

const Image = styled.img`
  position: absolute;
  left: 20px;
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const SearchInputFormContainer = styled.div`
  position: relative;
  width: 100%;

  ${Image} {
    top: 34%;
  }

  ${StyledInput} {
    padding: 15px 16px 15px 44px;

    background-color: #f5f5f5;

    border: none;
    border-radius: 10px;
  }
`;

const StyledIconButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
`;

const SearchInputForm = () => {
    const router = useRouter();
    const searchParam = router.query["keyword"];
    const [searchKeyword, setSearchKeyword] = useState(searchParam || "");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (typeof window !== 'undefined') {
                router.push(`/folder?keyword=${searchKeyword}`);
            }

        }
    };

    const deleteKeyword = () => {
        setSearchKeyword("");
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        router.push('/folder');

    };

    return (
        <SearchInputFormContainer>
            <Image src="/icons/search.svg" alt="search icon"/>
            <StyledInput
                type="text"
                placeholder="링크를 검색해 보세요."
                defaultValue={searchKeyword || ""}
                ref={inputRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchKeyword(e.target.value)
                }
                onKeyDown={(e: React.KeyboardEvent) => handleSubmit(e)}
            />

            {searchKeyword && (
                <StyledIconButton variant="icon" onClick={deleteKeyword}>
                    <Icons.Close/>
                </StyledIconButton>
            )}
        </SearchInputFormContainer>
    );
};

export default SearchInputForm;
