import React from "react";
import Avatar from "@/components/sharing/user/Avatar";
import styled from "styled-components";
import { TUserProfile } from "@/utils/types";
import { media } from "@/styles/device";
import { AVATAR_DEFAULT_SIZE } from "@/utils/constants";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileText = styled.span`
  color: var(--color--gray4);

  @media ${media.mobile} {
    display: none;
  }
`;

const UserProfile = ({ userInfo, className, size }: TUserProfile) => {
  const avatarImage = userInfo.image_source || undefined;

  return (
    <ProfileContainer className={className}>
      <Avatar
        avatarImage={avatarImage}
        width={size || AVATAR_DEFAULT_SIZE}
        height={size || AVATAR_DEFAULT_SIZE}
      />
      <ProfileText>{userInfo.email}</ProfileText>
    </ProfileContainer>
  );
};

export default UserProfile;
