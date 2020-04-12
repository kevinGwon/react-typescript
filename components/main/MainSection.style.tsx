import styled, { css } from 'styled-components';
import { FullPos } from '../../styled/mixin';
import {
  $mqMedium,
  $mqLarge,
  $dur,
  $colorPrimary,
  $headerHeightSm,
  $ease,
} from '../../styled/global/StyledVariable.style';

export const StyledMainSectionBox = styled.div.attrs(props => ({
  className: `movie-section-box`,
}))`
  overflow: hidden;
  ${FullPos}
`;
export const StyledMainSection = styled.section.attrs(props => ({
  className: `${props.active ? 'is-active' : ''}`,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  ${FullPos}
  opacity: 0;
  transition: all ${$dur}s linear;

  &::before {
    content: '';
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(black 5%, transparent);
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(transparent 30%, black);
  }
  &.is-animated {
    transform: translateY(-5%);
  }
  &.is-active {
    visibility: visible;
    opacity: 1;
  }
  h1 {
    display: block;
    width: 100%;
    margin-bottom: 6rem;
    text-align: center;
  }
  .l-wrap {
    flex-direction: column;
  }
`;
export const StyledMainSectionBg = styled.div.attrs(props => ({
  className: 'bg',
}))`
  ${FullPos};
  transition: all ${$dur}s linear;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;

  ${props => {
    return css`
      background-image: url('${props.bgUrl}')};
    `;
  }}
  & + .bg--next {
    transform: scale(1.25);
  }
`;

// Indicator
export const StyledMainIndicator = styled.div.attrs(props => ({
  className: 'indicator',
}))`
  @media (min-width: ${$mqMedium}) {
    position: fixed;
    z-index: 100;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);

    button {
      & + button {
        margin-top: 1.5rem;
      }
    }
  }
  @media (min-width: ${$mqLarge}) {
    left: 100px;
  }
  @media (max-width: ${$mqMedium}) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: ${$headerHeightSm}px;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;

    button {
      color: inherit;
      text-transform: capitalize;
      font-size: 1.6rem;
      margin-left: 1rem;
      margin-top: 1rem;
      padding: 0.5rem 0.8rem;

      &:first-child {
        margin-left: 0;
      }
      &.is-active {
      }
    }
  }
`;
export const StyledMainIndicatorBtn = styled.button.attrs(props => ({
  type: 'button',
}))`
  display: block;
  position: relative;
  color: inherit;
  font-size: 1.6rem;
  letter-spacing: 0.08rem;
  text-transform: capitalize;
  padding: 1rem;
  text-align: left;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 0%;
    margin-top: -1px;
    border-bottom: 2px solid ${$colorPrimary};
    transition: width ${$dur}s ease;
  }
  &.is-active {
    &::before {
      width: 100%;
    }
  }
`;
