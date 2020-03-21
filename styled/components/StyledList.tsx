import styled, { css } from 'styled-components';
import { $colorPrimary } from '../global/StyledVariable';

const SwiperButtonStyle = css`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  height: auto;
  width: 27%;
  background-image: none;
  background-color: transparent;
`;

export const StyledSwiperContainer = styled.div.attrs(props => ({
  className: `swiper-container ${props.category &&
    `swiper-container-${props.category}`}`,
}))`
  padding-bottom: 5rem;
`;

export const StyledSwiperPagination = styled.div.attrs(props => ({
  className: 'swiper-pagination',
}))`
  .swiper-pagination-bullet {
    opacity: 0.35;
    background-color: ${$colorPrimary};
  }
  .swiper-pagination-active {
    opacity: 1;
  }
`;

export const StyledSwiperButton = styled.div.attrs(props => ({
  className: `swiper-button-${props.dir && props.dir}`,
}))`
  ${SwiperButtonStyle}
`;
