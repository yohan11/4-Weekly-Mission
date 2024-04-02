import React, {useState} from "react";
import styled from "styled-components";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {shareFacebook, shareKakao} from "@/utils/shareUtils";
import {useFolder} from "@/contexts/FolderContext";
import * as Icons from "@/components/sharing/Icons";
import Button from "@/components/sharing/Button";
import Toast from "@/components/sharing/Toast";
import {media} from "@/styles/device";

const IconsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const IconText = styled.span`
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  @media ${media.mobile} {
    font-size: 12px;
  }
`;

const ShareButton = styled(Button)`
  background: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function SocialIcons() {
    const {currentFolder} = useFolder();
    const [showToast, setShowToast] = useState(false)

    return (
        <>
            <IconsContainer>
                <ShareButton
                    variant="icon"
                    onClick={() => shareKakao()}
                >
                    <Icons.ShareKakao/>
                    <IconText>카카오톡</IconText>
                </ShareButton>
                <ShareButton
                    variant="icon"
                    onClick={() => shareFacebook(currentFolder.id)}
                >
                    <Icons.ShareFacebook/>
                    <IconText>페이스북</IconText>
                </ShareButton>
                <CopyToClipboard
                    text={`http://localhost:3000/shared/${currentFolder.id}`}
                    onCopy={() => {
                        setShowToast(true);
                        setTimeout(() => setShowToast(false), 1000);
                    }}
                >
                    <ShareButton
                        variant="icon"
                    >
                        <Icons.ShareLink/>
                        <IconText>링크 복사</IconText>
                    </ShareButton>
                </CopyToClipboard>
            </IconsContainer>
            {showToast ? <Toast show={showToast}/> : null}
        </>
    );
}

export default SocialIcons;
