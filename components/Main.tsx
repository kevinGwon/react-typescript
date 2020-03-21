import * as React from 'react';
import styled from 'styled-components';

const StyledMain = styled('main').attrs(props => ({
  id: 'main',
}))`
  background-color: #000;
`;

function Main(props) {
  return <StyledMain {...props} />;
}

export default Main;
