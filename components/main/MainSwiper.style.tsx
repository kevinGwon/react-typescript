import styled, { css } from 'styled-components';
import {
  $colorPrimary,
  $mqLarge,
} from '../../styled/global/StyledVariable.style';
import { FullPos } from '../../styled/mixin';

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

  @media (min-width: ${$mqLarge}) {
    max-width: 850px;
  }
`;

export const StyledSwiperSlide = styled.div.attrs(props => ({
  className: 'swiper-slide',
}))`
  position: relative;
  height: 0;
  padding-bottom: ${(582 / 1180) * 100}%;

  a {
    display: block;
    ${FullPos};
  }
  img {
    object-fit: cover;
    height: 100%;
  }

  .thumb {
    height: 100%;
  }
`;

export const StyledMainSwiperPagination = styled.div.attrs(props => ({
  className: 'swiper-pagination',
}))`
  .swiper-pagination-bullet {
    opacity: 0.35;
    background-color: ${$colorPrimary};
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

export const StyledMainSwiperButton = styled.div.attrs(props => ({
  className: `swiper-button-${props.dir && props.dir}`,
}))`
  ${SwiperButtonStyle}
`;

export const StyledMainSwiperLazy = styled.div.attrs(props => ({
  className: 'swiper-lazy-preloader swiper-lazy-preloader-white',
}))`
  border-color: ${$colorPrimary};
  border-top-color: transparent;

  &:after {
    background-image: url('/images/loading.svg') !important;
  }
`;
