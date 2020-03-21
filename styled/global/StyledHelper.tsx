import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .hidden,
  [hidden] {
    display: none;
  }
  .a11y {
    position: absolute !important;
    overflow: hidden;
    height: 1px;
    width: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }
`;
