import * as React from 'react';
import styled from 'styled-components';

// Styled
import { StyledMain } from './Main.style';

function Main({ children }) {
  return (
    <StyledMain>
      <h1 className="a11y">Themovie Contents</h1>
      {children}
    </StyledMain>
  );
}

export default Main;
