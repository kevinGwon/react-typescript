import { createGlobalStyle } from 'styled-components';
import {
  $fontMain,
  $colorPrimary,
  $white,
  $gray3,
  $en,
} from './StyledVariable.style';

export default createGlobalStyle`
  // -----------------------------------------------------------------------------
  // Element Style Reset
  // -----------------------------------------------------------------------------

  html {
    background-color: black;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
  }

  body {
    background-color: black;
    min-width: 320px;
    color: ${$white};
    font-size: 1em;
    font-family: ${$fontMain};
    -webkit-overflow-scrolling: touch;
  }

  hr {
    height: 1px;
    margin: 1em 0;
    padding: 0;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  ul,
  ol,
  dl,
  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  em,
  address {
    font-style: normal;
  }

  figure,
  form {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: top;
  }

  label {
    cursor: pointer;
  }

  button {
    -webkit-appearance: none;
    box-sizing: content-box;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  input[type='checkbox'],
  input[type='radio'] {
    vertical-align: middle;
  }

  input[type='search'] {
    -webkit-appearance: none;
    border-radius: 0;
  }

  textarea {
    vertical-align: top;
    resize: vertical;
  }

  input:invalid,
  textarea:invalid {
    background-color: #f0dddd;
  }

  table {
    width: 100%;
    empty-cells: show;
  }

  td {
    vertical-align: middle;
  }

  ::selection {
    background: ${$colorPrimary};
    color: ${$white};
    text-shadow: none;
  }

  ::-webkit-input-placeholder {
    color: ${$gray3};
  }

  :-moz-placeholder {
    color: ${$gray3};
  }

  [lang='en'] {
    font-family: ${$en};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    color: inherit;
    font-weight: normal;
  }

  a {
    color: $gray7;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
    -ms-interpolation-mode: bicubic;
  }
`;
