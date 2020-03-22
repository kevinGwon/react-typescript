import * as React from 'react';
import { StyledMovieSectionBg } from './MainSection.style';

function MovieSectionBg({ bgUrl, $sectionBg }) {
  return <StyledMovieSectionBg bgUrl={bgUrl} ref={$sectionBg} />;
}

export default MovieSectionBg;
