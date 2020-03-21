import styled from 'styled-components';
import { $colorPrimary } from '../global/StyledVariable';

export const StyledSwiperLazy = styled.div.attrs(props => ({
  className: 'swiper-lazy-preloader swiper-lazy-preloader-white',
}))`
  border-color: ${$colorPrimary};
  border-top-color: transparent;

  &:after {
    background-image: url('/images/loading.svg') !important;
  }
`;
