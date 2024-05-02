import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/sharing/Button";
import * as Icons from "@/components/sharing/Icons";
import Kebab from "@/components/sharing/Kebab";
import Image from "next/image";
import React, { useState } from "react";
import { TCard } from "@/utils/types";

const SAMPLE_IMAGE_URL = "/images/default_card.svg";

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  box-shadow: 0 5px 25px 0 #00000014;
  border-radius: 15px;
`;

const ImageContainer = styled.div`
  position: relative;

  height: 200px;
  width: 100%;
  object-fit: cover;

  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;

  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.3);
  }
`;

const TextContainer = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: left;

  padding: 15px 20px;

  position: relative;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
`;

const Contents = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  color: var(--color-black);
  font-size: 16px;
  font-weight: 400;
`;

type StarButtonProps = {
  $filled: boolean;
};

const StarButton = styled(Button)<StarButtonProps>`
  position: absolute;
  right: 2%;
  top: 12px;
  opacity: ${({ $filled }) => ($filled ? 1 : 0.7)};
  filter: ${({ $filled }) =>
    $filled
      ? "invert(60%) sepia(100%) saturate(2000%) hue-rotate(28deg) brightness(150%) contrast(80%)"
      : "none"};
  transition: 0.2s;

  &:hover {
    filter: invert(60%) sepia(100%) saturate(2000%) hue-rotate(28deg)
      brightness(150%) contrast(80%);
  }
`;

const Card = ({ id, cardImage, cardTime, cardDescription, cardUrl }: TCard) => {
  const imageSrc = cardImage ? cardImage : SAMPLE_IMAGE_URL;
  const [filledStar, setFilledStar] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClickStar = (e: React.MouseEvent) => {
    e.preventDefault();
    if (filledStar) setFilledStar(false);
    else setFilledStar(true);
  };

  return (
    <CardContainer>
      <Link
        href={`/link/${id}`}
        key={id}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageContainer>
          <StyledImage
            src={imageError ? SAMPLE_IMAGE_URL : imageSrc}
            fill
            alt="card profile"
            onError={() => setImageError(true)}
          />
          <StarButton
            variant="icon"
            $filled={filledStar}
            onClick={handleClickStar}
          >
            <Icons.Star />
          </StarButton>
        </ImageContainer>
      </Link>
      <TextContainer>
        <OptionContainer>
          <span className="font-thin font-13px" style={{ color: "#666666" }}>
            {cardTime["timeDifference"]}
          </span>
          <Kebab linkUrl={cardUrl} />
        </OptionContainer>
        <Contents>{cardDescription}</Contents>
        <div className="font-thin font-14px" style={{ color: "#333333" }}>
          {cardTime["createdDateString"]}
        </div>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
