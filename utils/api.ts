import axios from "@/utils/axios";
import {
  TAuth,
  TFolder,
  TLink,
  TSampleFolder,
  TToken,
  TUser,
} from "@/utils/types";
import {
  ERROR_400_MESSAGE,
  ERROR_409_MESSAGE,
  FILTER_LINKS,
  HTTP_ERROR,
  NETWORK_ERROR,
} from "@/utils/constants";

export const getUser = async (): Promise<TUser> => {
  return axios
    .get("/users/1")
    .then((response) => {
      const responseData = response.data;
      return responseData.data[0];
    })
    .catch((error: Error) => {
      throw HTTP_ERROR(error);
    });
};

export const getSampleFolder = async (): Promise<TSampleFolder> => {
  return axios
    .get("/sample/folder")
    .then((response) => {
      const responseData = response.data;
      return responseData.folder;
    })
    .catch((error: Error) => {
      throw HTTP_ERROR(error);
    });
};

export const getFolders = async (): Promise<TFolder[]> => {
  return await axios
    .get("/users/1/folders")
    .then((response) => {
      const responseData = response.data;
      return responseData.data;
    })
    .catch((error: Error) => {
      throw HTTP_ERROR(error);
    });
};

export const getLinks = async (
  folderId: number,
  keyword: string | null,
): Promise<TLink[] | undefined> => {
  const URL =
    folderId === 1 ? `/users/1/links` : `/users/1/links?folderId=${folderId}`;

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
    .catch((error: Error) => {
      throw HTTP_ERROR(error);
    });
};

export const postSignIn = async (values: TAuth): Promise<TToken | null> => {
  return await axios
    .post("/sign-in", JSON.stringify(values), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .then((responseData): TToken => responseData.data)
    .catch((error: Error) => {
      if (error.message === ERROR_400_MESSAGE) return null;
      throw NETWORK_ERROR(error);
    });
};

export const checkEmail = async (values: string): Promise<boolean | null> => {
  return await axios
    .post("/check-email", JSON.stringify({ email: values }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .then((responseData): boolean => responseData.data)
    .catch((error: Error) => {
      if (error.message === ERROR_409_MESSAGE) return null;
      throw NETWORK_ERROR(error);
    });
};

export const postSignUp = async (values: TAuth): Promise<TToken | null> => {
  return await axios
    .post("/sign-up", JSON.stringify(values), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .then((responseData): TToken => responseData.data)
    .catch((error: Error) => {
      if (error.message === ERROR_400_MESSAGE) return null;
      throw NETWORK_ERROR(error);
    });
};
