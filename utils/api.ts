const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const getUser = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/1`);
        if (response.ok) {
            return response.json();
        }
        return new Error("유저를 불러올 수 없습니다."); // 예상 가능한 에러
    } catch (e) {
        // 예상 불가능한 에러 처리
        if (e instanceof Error) {
            return e;
        }
    }
};

export const getSampleFolder = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/sample/folder`);
        if (response.ok) {
            return response.json();
        }
        return new Error("폴더를 불러올 수 없습니다."); // 예상 가능한 에러
    } catch (e) {
        // 예상 불가능한 에러 처리
        if (e instanceof Error) {
            return e;
        }
    }
};

export const getFolders = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/1/folders`);
        if (response.ok) {
            return response.json();
        }
        return new Error("폴더를 불러올 수 없습니다."); // 예상 가능한 에러
    } catch (e) {
        // 예상 불가능한 에러 처리
        if (e instanceof Error) {
            return e;
        }
    }
};

export const getLinks = async (folderId: number) => {
    const URL =
        folderId === 1
            ? `${API_BASE_URL}/users/1/links`
            : `${API_BASE_URL}/users/1/links?folderId=${folderId}`;
    try {
        const response = await fetch(URL);
        if (response.ok) {
            return response.json();
        }
        return new Error("링크를 불러올 수 없습니다."); // 예상 가능한 에러
    } catch (e) {
        // 예상 불가능한 에러 처리
        if (e instanceof Error) {
            return e;
        }
    }
};

// 키워드를 포함하는 데이터를 리턴하는 함수
type Data = {
    description: string;
    title: string;
    url: string;
};

export const getLinksByKeyword = async (
    folderId: number,
    keyword: string | string[],
) => {
    const data = await getLinks(folderId);
    if (!keyword) return data.data;

    if (typeof keyword === "string") {
        const loweredKeyword = keyword.toLowerCase();

        return data.data.filter(
            (item: Data) =>
                (item.description ?
                    item.description.toLowerCase().includes(loweredKeyword) : '') ||
                (item.title ? item.title.toLowerCase().includes(loweredKeyword) : '') ||
                (item.url ? item.url.toLowerCase().includes(loweredKeyword) : ''),
        );
    }
};
