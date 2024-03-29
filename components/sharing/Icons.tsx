import styled, {css} from "styled-components";

const socialIconSize = css`
  width: 20px;
  height: 20px;
`;

const actionIconSize = css`
  width: 18px;
  height: 18px;
`;

const shareIconSize = css`
  width: 42px;
  height: 42px;
`;

export const Facebook = styled.div`
  background: url("/icons/facebook.svg") no-repeat;
  ${socialIconSize}
`;

export const Twitter = styled.div`
  background: url("/icons/twitter.svg") no-repeat;
  ${socialIconSize}
`;

export const Youtube = styled.div`
  background: url("/icons/youtube.svg") no-repeat;
  ${socialIconSize}
`;

export const Instagram = styled.div`
  background: url("/icons/instagram.svg") no-repeat;
  ${socialIconSize}
`;

export const Close = styled.div`
  background: url("/icons/close.svg") no-repeat;
  width: 24px;
  height: 24px;
`;

export const Share = styled.div`
  background: url("/icons/share.svg") no-repeat;
  ${actionIconSize}
`;

export const Delete = styled.div`
  background: url("/icons/delete.svg") no-repeat;
  ${actionIconSize}
`;

export const Edit = styled.div`
  background: url("/icons/pen.svg") no-repeat;
  ${actionIconSize}
`;

export const Star = styled.div`
  background: url("/icons/star.svg") no-repeat;
  width: 34px;
  height: 34px;
`;

export const Kebab = styled.div`
  background: url("/icons/kebab.svg") no-repeat;
  width: 21px;
`;

export const ShareKakao = styled.div`
  background: url("/icons/kakao_share.svg") no-repeat;
  ${shareIconSize}
`;

export const ShareFacebook = styled.div`
  background: url("/icons/facebook_share.svg") no-repeat;
  ${shareIconSize}
`;

export const ShareLink = styled.div`
  background: url("/icons/link_share.svg") no-repeat;
  ${shareIconSize}
`;

export const EyeOff = styled.div`
  background: url("/icons/eye-off.svg") no-repeat;
  width: 16px;
  height: 13.82px;
`;

export const EyeOn = styled.div`
  background: url("/icons/eye-on.svg") no-repeat;
  width: 16px;
  height: 10.91px;
`;