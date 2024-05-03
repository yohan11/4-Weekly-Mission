import Footer from "@/components/sharing/Footer";
import React, { useEffect, useState } from "react";
import {
  getFolderInfo,
  getMyInfo,
  getSharedPageData,
  getUser,
} from "@/utils/api";
import SearchInputForm from "@/components/folder/input/SearchInputForm";
import FolderHeaderLayout from "@/components/folder/layout/FolderHeaderLayout";
import MainLayout from "@/components/folder/layout/MainLayout";
import styled from "styled-components";
import { TFolder, TLink, TUser } from "@/utils/types";
import Header from "@/components/sharing/Header";
import Avatar from "@/components/sharing/user/Avatar";
import { useRouter } from "next/router";
import { SearchMessage } from "@/pages/folder";
import CardList from "@/components/folder/card/CardList";

export async function getServerSideProps(context: any) {
  const { folderId } = context.query;

  return {
    props: {
      folderId,
    },
  };
}

const FolderOwner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Index = ({ folderId }: { folderId: number }) => {
  const router = useRouter();
  const keyword = (router.query["keyword"] as string) || null;
  const [links, setLinks] = useState<TLink[]>();
  const [folderInfo, setFolderInfo] = useState<TFolder>({
    id: 0,
    created_at: "",
    name: "",
    user_id: 0,
    favorite: false,
  });
  const [ownerId, setOwnerId] = useState<number>(0);
  const [folderOwner, setFolderOwner] = useState<TUser>();
  const [myInfo, setMyInfo] = useState<TUser>();

  const loadFolderInfo = async () => {
    const res = await getFolderInfo(folderId);
    setFolderInfo(res);
    setOwnerId(res.user_id);
  };

  const loadUserInfo = async () => {
    const res = await getUser(ownerId);
    setFolderOwner(res);
  };

  const loadLinks = async () => {
    const res = await getSharedPageData(ownerId, folderId);
    setLinks(res);
  };

  const loadMyInfo = async () => {
    const res = await getMyInfo();
    setMyInfo(res);
  };

  // const loadNewLinks = () => {
  //   if (keyword) {
  //     const loweredKeyword = keyword.toLowerCase();
  //     setLinks((prevState: TLink[]) => FILTER_LINKS(prevState, loweredKeyword));
  //   } else {
  //     setLinks(folderInfo.links);
  //   }
  // };

  // useEffect(() => {
  //   loadNewLinks();
  // }, [keyword]);

  useEffect(() => {
    loadFolderInfo();
    loadMyInfo();
  }, []);

  useEffect(() => {
    loadUserInfo();
    loadLinks();
  }, [ownerId]);

  return (
    <>
      <Header userInfo={myInfo} fixed={true} />
      <div className="component-default-margin">
        <FolderHeaderLayout>
          <FolderOwner>
            <Avatar
              avatarImage={folderOwner?.image_source || ""}
              width={62}
              height={62}
            />
            <span>@{folderOwner?.name}</span>
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
