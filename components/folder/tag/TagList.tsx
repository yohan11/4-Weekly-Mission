import React, { useEffect, useState } from "react";
import Tag from "@/components/folder/tag/Tag";
import styled from "styled-components";
import { getFolders } from "@/utils/api";
import { useFolder } from "@/contexts/FolderContext";
import { TFolder } from "@/utils/types";

const TagListContainer = styled.div`
  width: 90%;

  display: flex;
  flex-flow: wrap;
  gap: 10px;
`;
const TagList = () => {
  const [folders, setFolders] = useState<TFolder[]>([]);
  const { currentFolder, setCurrentFolder } = useFolder();

  const loadFolders = async () => {
    const folderInfo = await getFolders();
    if (!folderInfo) return;
    setFolders(folderInfo["data"]);
  };

  const handleClickTag = (id: number, name: string) => {
    setCurrentFolder({ id, name });
  };

  useEffect(() => {
    loadFolders();
  }, []);

  return (
    <TagListContainer>
      <Tag
        isSelected={currentFolder.id === 1}
        id={1}
        name="전체"
        onClick={handleClickTag}
      >
        전체
      </Tag>
      {folders.length !== 0
        ? folders.map((folder) => {
            return (
              <Tag
                key={folder.id}
                id={folder.id}
                name={folder.name || ""}
                isSelected={currentFolder.id === folder.id}
                onClick={handleClickTag}
              >
                {folder["name"]}
              </Tag>
            );
          })
        : null}
    </TagListContainer>
  );
};

export default TagList;
