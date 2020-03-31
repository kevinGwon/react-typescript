import styled, { css } from 'styled-components';
import { FullPos } from '../../styled/mixin';
import { $dur, $ease } from '../../styled/global/StyledVariable.style';

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
