import React from "react";
import Avatar from "@/components/sharing/user/Avatar";
import styled from "styled-components";
import {User} from "@/utils/types";
import media from "@/styles/mediaSize.js";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileText = styled.span`
  ${media.mobile`display: none;`}
`;

interface UserProfileProps {
    userInfo: User;
    className?: string;
    size?: string;
}

const UserProfile = ({userInfo, className, size}: UserProfileProps) => {
    const avatarImage = userInfo["image_source"] || undefined;

    return (
        <ProfileContainer className={className}>
            <Avatar
                avatarImage={avatarImage}
                width={size || "28px"}
                height={size || "28px"}
            />
            <ProfileText>{userInfo["email"]}</ProfileText>
        </ProfileContainer>
    );
};

export default UserProfile;
