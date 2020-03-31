import { createGlobalStyle } from 'styled-components';
import { $menuWidth, $dur, $ease } from './StyledVariable.style';

export default createGlobalStyle`
  body {
    #__next {
      position: relative;
      left: 0;
      transition: all ${$dur}s ${$ease};
    }
    &.is-active--nav {
      #__next {
        left: -100px;
      }
    }
  }
`;
