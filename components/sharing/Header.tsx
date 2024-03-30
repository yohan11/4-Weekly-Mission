import Button from "@/components/sharing/Button";
import styled from "styled-components";
import UserProfile from "@/components/sharing/user/UserProfile";
import {User} from "@/utils/types";
import Link from "next/link";
import {media} from "@/styles/device";
import Image from "next/image";

type HeaderStyledProps = {
    $fixed: boolean;
};

const HeaderContainer = styled.header<HeaderStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: ${({$fixed}) => ($fixed ? "fixed" : "static")};
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  padding: 30px 200px;
  padding-bottom: ${({$fixed}) => !$fixed && "0"};

  background-color: var(--color-background);

  @media ${media.tablet} {
    padding: 30px 32px;
  };
  @media ${media.mobile} {
    padding: 30px 32px;
  };
`;


interface HeaderProps {
    userInfo: User | null;
    fixed: boolean;
}

const Header = ({userInfo, fixed}: HeaderProps) => {
    return (
        <HeaderContainer $fixed={fixed}>
            <Link href="/">
                <Image alt="Linkbrary logo" src="/icons/Linkbrary.svg" width={133} height={24}/>
            </Link>
            {userInfo ? (
                <UserProfile userInfo={userInfo}/>
            ) : (
                <Button variant="gradient">로그인</Button>
            )}
        </HeaderContainer>
    );
};

export default Header;
