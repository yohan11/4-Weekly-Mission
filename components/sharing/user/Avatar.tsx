const DEFAULT_USER_ICON_URL = "/icons/default_profile.svg";

interface AvatarProps {
    avatarImage?: string;
    width?: string;
    height?: string;
}

const Avatar = ({
                    avatarImage = DEFAULT_USER_ICON_URL,
                    width,
                    height,
                }: AvatarProps) => {
    const avatarStyle: React.CSSProperties = {
        width,
        height,
        objectFit: "cover",
        borderRadius: "50%",
    };

    return <img src={avatarImage} alt="user profile" style={avatarStyle}/>;
};

export default Avatar;
