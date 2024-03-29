import {css} from 'styled-components';

const sizes = {
  tablet: "768px",
  mobile: "375px"
};


const media = {
  tablet: (...args) => css`
    @media (min-width: ${sizes.tablet}) and (max-width: 1199px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => {
    return css`
      @media (min-width: ${sizes.mobile}) and (max-width: 767px) {
        ${css(...args)}
      }
    `;
  }
};

export default media;