import * as React from 'react';
import { StyledMainSection, StyledMainSectionBox } from './MainSection.style';

function MainSection(props) {
  return (
    <StyledMainSectionBox>
      <StyledMainSection {...props} />
    </StyledMainSectionBox>
  );
}

export default MainSection;
