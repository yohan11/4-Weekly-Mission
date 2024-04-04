import axios from "@/utils/axios";
import { TFolder, TLink, TSampleFolder, TUser } from "@/utils/types";
import { FILTER_LINKS, HTTP_ERROR } from "@/utils/constants";

export const getUser = async (): Promise<TUser> => {
  return axios
    .get("users/1")
    .then((response) => {
      const responseData = response.data;
      return responseData.data[0];
    })
    .catch((error) => {
      throw HTTP_ERROR(error);
    });
};

export const getSampleFolder = async (): Promise<TSampleFolder> => {
  return axios
    .get("sample/folder")
    .then((response) => {
      const responseData = response.data;
      return responseData.folder;
    })
    .catch((error) => {
      throw HTTP_ERROR(error);
    });
};

export const getFolders = async (): Promise<TFolder[]> => {
  return await axios
    .get("users/1/folders")
    .then((response) => {
      const responseData = response.data;
      return responseData.data;
    })
    .catch((error) => {
      throw HTTP_ERROR(error);
    });
};

export const getLinks = async (
  folderId: number,
  keyword: string | null,
): Promise<TLink[] | undefined> => {
  const URL =
    folderId === 1 ? `users/1/links` : `users/1/links?folderId=${folderId}`;

  return axios
    .get(URL)
    .then((response) => response.data)
    .then((responseData) => {
      const result = responseData.data;
      if (keyword) {
        const loweredKeyword = keyword.toLowerCase();
        return FILTER_LINKS(result, loweredKeyword);
      }
      return result;
    })
    .catch((error) => {
      throw HTTP_ERROR(error);
    });
};
