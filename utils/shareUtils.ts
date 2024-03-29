const hostUrl = "http://localhost:3000/shared/";

// Facebook
export const shareFacebook = (folderId: number) => {
    const url = hostUrl + folderId;
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${url}`);
};

// Kakao
export const shareKakao = () => {
    if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
        }

        window.Kakao.Link.sendCustom({
            templateId: 106442,
        });
    }
};
