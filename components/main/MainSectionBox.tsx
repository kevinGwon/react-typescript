import * as React from 'react';

// Components
import { StyledMainSectionBox } from './MainSection.style';
import MainSection from './MainSection';
import MainListContainer from '../../containers/main/MainListContainer';
import MainIndicator from './MainIndicator';

// Types
import { IndexType } from '../../types';

function MainSectionBox({ API }: IndexType) {
  return (
    <StyledMainSectionBox>
      <MainIndicator API={API} />
      {Object.keys(API).map(category => {
        if (category !== 'search')
          return (
            <MainSection
              key={category}
              active={API[category][0].category === 'action'}
            >
              <MainListContainer data={API[category]} />
            </MainSection>
          );
      })}
    </StyledMainSectionBox>
  );
}

export default MainSectionBox;
