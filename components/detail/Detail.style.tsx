import styled, { css } from 'styled-components';

// Styled
import { StyledHeding2 } from '../../styled/global/StyledHeading.style';
import {
  $headerHeightSm,
  $mqLarge,
  $black,
  $colorPrimary,
  $mqMedium,
  $white,
} from '../../styled/global/StyledVariable.style';

// Variable
import { FullPos, rgba } from '../../styled/mixin';

export const StyledDetailLayout = styled.div`
  position: relative;

  @media (min-width: ${$mqLarge}) {
    margin: 0 10rem;
  }
`;
export const StyledDetailCover = styled.div`
  position: relative;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => `url('${props.bgUrl}')`};

  &::before {
    content: '';
    display: block;
    ${FullPos};
    z-index: 0;
    background-color: ${rgba($black, 0.7)};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    background: linear-gradient(transparent 30%, black);
  }
`;
export const StyledDetailSection = styled.div`
  .swiper-slide {
    position: relative;
    height: auto;
    padding-bottom: 0;

    a {
      position: static;
    }
    img {
      height: auto;
    }
  }
  .swiper-lazy-preloader,
  .swiper-lazy-preloader-white {
    border-color: ${$colorPrimary};
    border-top-color: transparent;
    &:after {
      background-image: url('/images/loading.svg') !important;
    }
  }
`;
export const StyledDetailHeader = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.2rem;
  transform: translateY(-100%);
`;
export const StyledDetailHeaderInner = styled.div`
  display: inline-block;
  position: relative;
`;
export const StyledDetailImg = styled.div`
  display: inline-block;
  position: relative;
  height: 200px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    background: linear-gradient(transparent 30%, black);
  }

  img {
    height: 100%;
    width: auto;
  }
`;
export const StyledDetailStarRatings = styled.div`
  /* .detail-star-ratings {} */
`;
export const StyledDetailInfo = styled.div`
  position: absolute;
  left: 0;
  right: -1rem;
  bottom: 0;
  box-sizing: border-box;
  transform: translateX(100%);
`;
export const StyledDetailTitle = styled(StyledHeding2)`
  font-size: 2rem;
`;
export const StyledDetailDate = styled.div`
  margin-bottom: 1rem;
`;
export const StyledDetailCategory = styled.ul`
  margin-top: -0.5rem;
  margin-left: -0.5rem;

  li {
    display: inline-block;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
`;
export const StyledDetailContent = styled.div`
  padding: 4rem 0;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3rem 0;
  }
  p {
    &:first-child {
      margin-top: 0;
    }
    margin: 2rem 0 4rem;
  }
  .swiper-container {
    margin-top: 2rem;
    padding-bottom: 0;
  }
`;
export const StyledDetailParagrap = styled.p`
  position: relative;
  padding-left: 2rem;
  box-sizing: border-box;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 2px;
    background-color: ${$colorPrimary};
  }
`;
export const StyledDetailCast = styled.ul`
  display: flex;
  flex-flow: row wrap;
  text-align: center;

  li {
    flex: 0 0 ${`${(1 / 4) * 100}%`};
    margin-bottom: 2rem;
  }
  span {
    display: block;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  .circle-wrap {
    display: inline-block;
    overflow: hidden;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (min-width: ${$mqLarge}) {
    li {
      flex: 0 0 ${`${(1 / 5) * 100}%`};
    }
  }
`;

export const StyledDetailFavoriteWrap = styled.div`
  position: absolute;
  right: 0;
  top: -21px;

  @media (min-width: ${$mqMedium}) {
    top: -30px;
  }
`;

export const StyledDetailFavoriteBtn = styled.button`
  color: ${$white};
  fill: ${$colorPrimary};

  svg,
  .text {
    vertical-align: middle;
  }
  svg {
    width: 25px;
    height: 25px;
  }
  .text {
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.8rem;
  }
  @media (min-width: ${$mqMedium}) {
    .text {
      visibility: visible;
      position: static;
      margin-right: 0.5rem;
    }
  }
`;

export const StyledDetailError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 91vh;

  p {
    display: block;
    font-size: 1.6rem;
  }
`;
