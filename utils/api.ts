import axios from "@/utils/axios";
import { TAuth, TFolder, TLink, TToken, TUser } from "@/utils/types";
import {
  ERROR_400_MESSAGE,
  ERROR_409_MESSAGE,
  HTTP_ERROR,
  NETWORK_ERROR,
} from "@/utils/constants";
import { MyInfo } from "@/contexts/MyInfoContext";

const ACCESS_TOKEN =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const getUser = async (userId: number): Promise<TUser> => {
  return axios
    .get(`/users/${userId}`)
    .then((response) => {
      const responseData = response.data;
      return responseData.data[0];
    })
    .catch((error: Error) => {
      throw HTTP_ERROR(error);
    });
};

export const getMyInfo = async (): Promise<TUser | MyInfo> => {
  return axios
    .get(`/users`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((response) => {
      const responseData = response.data;
      return responseData.data[0];
    })
    .catch((error: Error) => {
      throw HTTP_ERROR(error);
    });
};

export const getFolders = async (): Promise<TFolder[]> => {
  return await axios
    .get("/folders", {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data.data.folder)
    .catch((error: Error) => {
      throw HTTP_ERROR(error);
    });
};

export const getLinks = async (
  folderId: number,
  keyword: string | null,
): Promise<TLink[] | undefined> => {
  const URL = folderId === 1 ? `/links` : `/links?folderId=${folderId}`;

  return axios
    .get(URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((response) => response.data)
    .then((responseData) => {
      const result = responseData.data;
      // if (keyword) {
      //   const loweredKeyword = keyword.toLowerCase();
      //   return FILTER_LINKS(result, loweredKeyword);
      // }
      return result.folder;
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

export const getSharedPageData = async (userId: number, folderId: number) => {
  return await axios
    .get(`/users/${userId}/links?folderId=${folderId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data.data);
};

export const getFolderInfo = async (folderId: number) => {
  return await axios
    .get(`/folders/${folderId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .then((data) => data.data[0]);
};
