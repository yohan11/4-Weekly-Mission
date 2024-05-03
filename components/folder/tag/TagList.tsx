import React, { useEffect } from "react";
import Tag from "@/components/folder/tag/Tag";
import styled from "styled-components";
import { useFolder } from "@/contexts/FolderContext";
import { TFolder } from "@/utils/types";
import { getFolderInfo } from "@/utils/api";

const TagListContainer = styled.div`
  width: 90%;

  display: flex;
  flex-flow: wrap;
  gap: 10px;
`;

const TagList = ({
  foldersInfo,
  folderId,
}: {
  foldersInfo: TFolder[];
  folderId: number;
}) => {
  const { currentFolder, setCurrentFolder } = useFolder();

  const handleClickTag = (id: number, name: string) => {
    setCurrentFolder({ id, name });
  };

  const loadFolder = async () => {
    const res = await getFolderInfo(folderId);
    setCurrentFolder({ id: res.id, name: res.name });
  };

  useEffect(() => {
    loadFolder();
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
      {foldersInfo
        ? foldersInfo.map((folder) => {
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
