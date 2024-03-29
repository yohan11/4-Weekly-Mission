import styled from "styled-components";
import {ReactNode} from "react";
import media from "@/styles/mediaSize.js";

type TagStyledProps = {
    $isSelected: boolean;
};
const TagContainer = styled.button<TagStyledProps>`
  padding: 8px 12px 8px 12px;
  background-color: ${({$isSelected}) =>
          $isSelected ? "var(--color-primary)" : "var(--color-white)"};
  color: ${({$isSelected}) => $isSelected && "white"};
  font-size: large;
  border: 1px solid var(--color-primary);
  border-radius: 5px;

  white-space: nowrap;

  ${media.mobile`
    padding: 6px 10px;
    font-size: 14px;`}
`;

interface TagProps {
    children: ReactNode;
    id: number;
    name: string;
    isSelected: boolean;
    onClick: (id: number, name: string) => void;
}

const Tag = ({children, id, name, isSelected, onClick}: TagProps) => {
    return (
        <TagContainer $isSelected={isSelected} onClick={() => onClick(id, name)}>
            {children}
        </TagContainer>
    );
};

export default Tag;
