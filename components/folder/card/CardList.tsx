import React, {useEffect, useState} from "react";
import {formatDate, getTimeDifference} from "@/utils/dateUtils";
import Card from "@/components/folder/card/Card";
import styled from "styled-components";
import {useFolder} from "@/contexts/FolderContext";
import {getLinksByKeyword} from "@/utils/api";
import NoLink from "@/components/sharing/NoLink";
import {Link} from "@/utils/types";
import {useRouter} from "next/router";

const CardListContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;

  @media (min-width: 767px) and (max-width: 1124px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardList = () => {
    const {currentFolder} = useFolder();
    const router = useRouter();
    const [currentLinks, setCurrentLinks] = useState<Link[]>([]);
    const searchParam = router.query["keyword"] || "";
    const [keyword, setKeyword] = useState(searchParam);

    const loadLinks = async () => {
        const links = await getLinksByKeyword(currentFolder.id, keyword);
        setCurrentLinks(links);
    };

    // 쿼리 스트링이 바뀔 때 마다 keyword 세팅
    useEffect(() => {
        setKeyword(searchParam);
    }, [searchParam]);

    useEffect(() => {
        loadLinks();
    }, [currentFolder, keyword]);

    if (currentLinks.length === 0) return <NoLink/>;
    return (
        <CardListContainer>
            {currentLinks.map((link) => {
                const {id, created_at, description, image_source, url} = link;
                const createdDate = new Date(created_at);
                const currentDate = new Date();

                const createdDateString = formatDate(createdDate);
                const timeDifference = getTimeDifference(createdDate, currentDate);

                return (
                    <Card
                        key={id}
                        id={id}
                        cardImage={image_source || ""}
                        cardTime={{createdDateString, timeDifference}}
                        cardDescription={description || ""}
                        cardUrl={url}
                    />
                );
            })}
        </CardListContainer>
    );
};

export default CardList;
