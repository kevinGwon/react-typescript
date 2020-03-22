import styled, { css } from 'styled-components';
import { FullPos } from '../mixin';
import { $dur, $ease } from '../global/StyledVariable';

export const StyleArticle = styled.article`
  height: 100vh;
`;
export const StyledMovieSectionBox = styled.div.attrs(props => ({
  className: `movie-section-box`,
}))`
  overflow: hidden;
  ${FullPos}
`;
export const StyledMovieSection = styled.section.attrs(props => ({
  className: `movie-section ${props.active ? 'is-active' : ''}`,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  ${FullPos}
  opacity: 0;
  transition: all ${$dur} ${$ease};

  h1 {
    display: block;
    width: 100%;
    margin-bottom: 6rem;
    text-align: center;
  }
  .l-wrap {
    flex-direction: column;
  }
  &.is-active {
    visibility: visible;
    opacity: 1;
  }
`;
export const StyledMovieSectionBg = styled.div.attrs(props => ({
  className: 'movie-section-bg',
}))`
  ${FullPos}
  transition: all ${$dur} linear;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;

  ${props => {
    return css`
      background-image: ${props.bgUrl};
    `;
  }}
  & + .movie-section-bg--next {
    transform: scale(1.25);
  }
`;
