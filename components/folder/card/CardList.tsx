import React, { useEffect, useState } from "react";
import { formatDate, getTimeDifference } from "@/utils/dateUtils";
import Card from "@/components/folder/card/Card";
import styled from "styled-components";
import { useFolder } from "@/contexts/FolderContext";
import NoLink from "@/components/sharing/NoLink";
import { TLink } from "@/utils/types";
import { useRouter } from "next/router";
import { media } from "@/styles/device";

const CardListContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;

  @media ${media.tablet} {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
  @media ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const CardList = ({ links }: { links: TLink[] }) => {
  const { currentFolder } = useFolder();
  const router = useRouter();
  const [currentLinks, setCurrentLinks] = useState<TLink[]>([]);
  const searchParam = router.query["keyword"] || "";
  const [keyword, setKeyword] = useState(searchParam);

  // const loadLinks = async () => {
  //   const links = await getLinksByKeyword(currentFolder.id, keyword);
  //   setCurrentLinks(links);
  // };

  // 쿼리 스트링이 바뀔 때 마다 keyword 세팅
  useEffect(() => {
    setKeyword(searchParam);
  }, [searchParam]);

  // useEffect(() => {
  //   loadLinks();
  // }, [currentFolder, keyword]);

  if (links.length === 0) return <NoLink />;
  return (
    <CardListContainer>
      {links.map((link) => {
        const createdDate = new Date(link.createdAt);
        const currentDate = new Date();

        return (
          <Card
            key={link.id}
            id={link.id}
            cardImage={link.imageSource}
            cardTime={{
              createdDateString: formatDate(createdDate),
              timeDifference: getTimeDifference(createdDate, currentDate),
            }}
            cardDescription={link.description || ""}
            cardUrl={link.url}
          />
        );
      })}
    </CardListContainer>
  );
};

export default CardList;
