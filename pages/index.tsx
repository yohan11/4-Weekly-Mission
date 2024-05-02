import Footer from "@/components/sharing/Footer";
import React, { useEffect, useState } from "react";
import { getSampleFolder, getUser } from "@/utils/api";
import SearchInputForm from "@/components/folder/input/SearchInputForm";
import CardList from "@/components/folder/card/CardList";
import FolderHeaderLayout from "@/components/folder/layout/FolderHeaderLayout";
import MainLayout from "@/components/folder/layout/MainLayout";
import styled from "styled-components";
import { TSampleFolder, TUser } from "@/utils/types";
import Header from "@/components/sharing/Header";
import Avatar from "@/components/sharing/user/Avatar";
import { useRouter } from "next/router";
import { FILTER_LINKS } from "@/utils/constants";
import { SearchMessage } from "@/pages/folder";

export async function getServerSideProps() {
  const folderInfo = await getSampleFolder();
  const userInfo = await getUser();

  return {
    props: {
      folderInfo,
      userInfo,
    },
  };
}

const FolderOwner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Index = ({
  folderInfo,
  userInfo,
}: {
  folderInfo: TSampleFolder;
  userInfo: TUser;
}) => {
  const router = useRouter();
  const keyword = (router.query["keyword"] as string) || null;
  const [links, setLinks] = useState(folderInfo.links);

  const loadNewLinks = () => {
    if (keyword) {
      const loweredKeyword = keyword.toLowerCase();
      setLinks((prevState) => FILTER_LINKS(prevState, loweredKeyword));
    } else {
      setLinks(folderInfo.links);
    }
  };

  useEffect(() => {
    loadNewLinks();
  }, [keyword]);
  return (
    <>
      <Header userInfo={userInfo} fixed={true} />
      <div className="component-default-margin">
        <FolderHeaderLayout>
          <FolderOwner>
            <Avatar
              avatarImage={folderInfo.owner.profileImageSource || ""}
              width={62}
              height={62}
            />
            <span>@{folderInfo.owner.name}</span>
          </FolderOwner>
          <div className="font-regular font-40px margin-auto">
            {folderInfo?.name}
          </div>
        </FolderHeaderLayout>
        <MainLayout>
          <SearchInputForm />
          {keyword ? (
            <SearchMessage>
              {keyword}
              <span className="font-color-gray4">으로 검색한 결과입니다.</span>
            </SearchMessage>
          ) : null}
          <CardList links={links} />
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};
export default Index;
