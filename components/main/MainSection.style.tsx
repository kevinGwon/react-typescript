import styled, { css } from 'styled-components';
import { FullPos } from '../../styled/mixin';
import { $dur, $ease } from '../../styled/global/StyledVariable.style';

export const StyleArticle = styled.article`
  height: 100vh;
`;
export const StyledMainSectionBox = styled.div.attrs(props => ({
  className: `movie-section-box`,
}))`
  overflow: hidden;
  ${FullPos}
`;
export const StyledMainSection = styled.section.attrs(props => ({
  className: `movie-section ${props.active ? 'is-active' : ''}`,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  ${FullPos}
  opacity: 0;
  transition: all 1s ${$ease};

  h1 {
    display: block;
    width: 100%;
    margin-bottom: 6rem;
    text-align: center;
  }
  .l-wrap {
    flex-direction: column;
  }
  &.is-animated {
    transform: translateY(-10%);
  }
  &.is-active {
    visibility: visible;
    opacity: 1;
  }
`;
export const StyledMainSectionBg = styled.div.attrs(props => ({
  className: 'movie-section-bg',
}))`
  ${FullPos};
  transition: all ${$dur} linear;
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
  & + .movie-section-bg--next {
    transform: scale(1.25);
  }
`;
