import Footer from "@/components/sharing/Footer";
import AddLinkForm from "@/components/folder/input/AddLinkForm";
import SearchInputForm from "@/components/folder/input/SearchInputForm";
import TagList from "@/components/folder/tag/TagList";
import Actions from "@/components/folder/Actions";
import FolderHeaderLayout from "@/components/folder/layout/FolderHeaderLayout";
import MainLayout from "@/components/folder/layout/MainLayout";
import ModalContainer from "@/components/sharing/modal/Modal";
import * as Modal from "@/components/sharing/modal/ModalContents";
import ModalButton from "@/components/sharing/modal/ModalButton";
import useModal from "@/hooks/useModal";
import { useFolder } from "@/contexts/FolderContext";
import Header from "@/components/sharing/Header";
import Button from "@/components/sharing/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import { media } from "@/styles/device";
import { getFolders, getLinks } from "@/utils/api";
import { TFolder, TLink } from "@/utils/types";
import { useEffect, useState } from "react";
import CardList from "@/components/folder/card/CardList";
import { useMyInfo } from "@/contexts/MyInfoContext";

const AddFolderButton = styled(Button)`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary);

  white-space: nowrap;
  cursor: pointer;
  background: none;

  @media ${media.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    padding: 10px 24px;

    position: fixed;
    bottom: 5%;
    left: 0;
    right: 0;
    z-index: 1;

    border-radius: 20px;
    background-color: var(--color-primary);
    color: white;
    font-size: 12px;
  }
`;

export const SearchMessage = styled.h1`
  margin: 0;
  @media ${media.mobile} {
    font-size: 24px;
  }
`;

const FolderAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${media.mobile} {
    flex-direction: column;
    gap: 12px;
  }
`;

const Folder = () => {
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const { currentFolder } = useFolder();
  const [links, setLinks] = useState<TLink[]>();
  const router = useRouter();
  const keyword = (router.query["keyword"] as string) || null;
  const [foldersInfo, setFoldersInfo] = useState<TFolder[]>([]);
  const { myInfo } = useMyInfo();

  const loadLinks = async () => {
    const linksInfo = await getLinks(currentFolder.id, keyword);
    setLinks(linksInfo);
  };

  const loadFolders = async () => {
    const res = await getFolders();
    setFoldersInfo(res);
  };

  useEffect(() => {
    loadFolders();
    loadLinks();
  }, []);

  useEffect(() => {
    loadLinks();
  }, [currentFolder, keyword]);

  return (
    <>
      <Header userInfo={myInfo} fixed={false} />
      <FolderHeaderLayout>
        <AddLinkForm />
      </FolderHeaderLayout>
      <MainLayout>
        <SearchInputForm />
        {keyword ? (
          <SearchMessage>
            {keyword}
            <span className="font-color-gray4">으로 검색한 결과입니다.</span>
          </SearchMessage>
        ) : null}
        <div className="space-between">
          <TagList foldersInfo={foldersInfo} />
          <AddFolderButton variant="text" onClick={handleModalOpen}>
            폴더 추가 +
          </AddFolderButton>
        </div>
        <FolderAction className="space-between">
          <span className="font-24px font-regular">{currentFolder.name}</span>
          {currentFolder.id !== 1 ? <Actions /> : null}
        </FolderAction>
        <CardList links={links} />
      </MainLayout>
      <Footer />

      {openModal ? (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더 추가</Modal.Title>
          <Modal.Input placeholder="내용 입력" />
          <ModalButton buttonStyle="blue">추가하기</ModalButton>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Folder;
