import Image from "next/image";
import { TAvatar } from "@/utils/types";

const DEFAULT_USER_ICON_URL = "/icons/default_profile.svg";

const Avatar = ({
  avatarImage = DEFAULT_USER_ICON_URL,
  width,
  height,
}: TAvatar) => {
  const avatarStyle: React.CSSProperties = {
    objectFit: "cover",
    borderRadius: "50%",
  };

  return (
    <Image
      src={avatarImage}
      alt="user profile"
      style={avatarStyle}
      width={width}
      height={height}
    />
  );
};

export default Avatar;
