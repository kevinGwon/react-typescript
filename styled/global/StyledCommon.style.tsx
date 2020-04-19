import { createGlobalStyle } from 'styled-components';
import { $menuWidth, $dur, $ease } from './StyledVariable.style';

export default createGlobalStyle`
  body {
    #main {
      transform: translateZ(0);
      transition: all ${$dur}s ${$ease};
    }
    &.is-active--nav {
      #main {
        transform: translateX(-50px);
      }
    }
  }
`;
