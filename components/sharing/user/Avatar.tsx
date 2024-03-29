import Image from "next/image";

const DEFAULT_USER_ICON_URL = "/icons/default_profile.svg";

interface AvatarProps {
    avatarImage?: string;
    width?: number;
    height?: number;
}

const Avatar = ({
                    avatarImage = DEFAULT_USER_ICON_URL,
                    width,
                    height,
                }: AvatarProps) => {
    const avatarStyle: React.CSSProperties = {
        objectFit: "cover",
        borderRadius: "50%",
    };

    return <Image src={avatarImage} alt="user profile" style={avatarStyle} width={width} height={height}/>;
};

export default Avatar;
