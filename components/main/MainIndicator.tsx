import * as React from 'react';

// Types
import { IndexType } from '../../types';

// Styled
import {
  StyledMainIndicator,
  StyledMainIndicatorBtn,
} from './MainIndicator.style';

function MainIndicator({ API }: IndexType) {
  return (
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
  );
}

export default MainIndicator;
