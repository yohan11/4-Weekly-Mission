import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFolders } from "@/utils/api";
import ModalFolderItem from "@/components/sharing/modal/ModalFolderItem";
import { TFolder } from "@/utils/types";

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
`;

function ModalFolderList() {
  const [folders, setFolders] = useState<TFolder[]>([]);
  const [currentFolder, setCurrentFolder] = useState(1);
  const handleClickTag = (folder: TFolder) => {
    setCurrentFolder(folder.id);
  };
  const loadFolders = async () => {
    const folderInfo = await getFolders();
    if (folderInfo) setFolders(folderInfo);
  };

  useEffect(() => {
    loadFolders();
  }, []);

  return (
    <FolderList>
      {folders.map((folder: TFolder) => (
        <ModalFolderItem
          key={folder.id}
          folder={folder}
          onClick={() => handleClickTag(folder)}
          selected={currentFolder === folder.id}
        />
      ))}
    </FolderList>
  );
}

export default ModalFolderList;
