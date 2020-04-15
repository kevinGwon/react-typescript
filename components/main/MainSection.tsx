import React from 'react';

// Components
import MainListContainer from '../../containers/main/MainListContainer';

// Types
import { IndexType } from '../../types';

// Styled
import {
  StyledMainSectionBox,
  StyledMainSection,
  StyledMainIndicator,
  StyledMainIndicatorBtn,
} from './MainSection.style';

function MainSection({ API }: IndexType) {
  return (
    // Contents Box
    <StyledMainSectionBox>
      {/* Heading */}
      <StyledMainIndicator lang="en">
        {Object.keys(API).map(
          key =>
            key !== 'search' && (
              <StyledMainIndicatorBtn key={API[key][0].category}>
                {API[key][0].category}
              </StyledMainIndicatorBtn>
            ),
        )}
      </StyledMainIndicator>
      {/* Contents */}
      {Object.keys(API).map(category => {
        if (category !== 'search')
          return (
            <StyledMainSection
              key={category}
              active={API[category][0].category === 'action'}
            >
              <MainListContainer data={API[category]} />
            </StyledMainSection>
          );
      })}
    </StyledMainSectionBox>
  );
}

export default MainSection;
