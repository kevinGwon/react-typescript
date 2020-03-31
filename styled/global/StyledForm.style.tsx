import { createGlobalStyle } from 'styled-components';
import {
  $colorPrimary,
  $white,
  $silver,
  $silverDark,
  $fog,
  $gray4,
} from './StyledVariable.style';
import { rgba } from '../mixin';

export default createGlobalStyle`
  // -----------------------------------------------------------------------------
  // Form
  // -----------------------------------------------------------------------------

  ::-webkit-input-placeholder {
    color: ${$white};
  }

  ::-moz-placeholder {
    color: ${$white};
  }

  :-ms-input-placeholder {
    color: ${$silverDark};
  }

  :-moz-placeholder {
    color: ${$silverDark};
  }

  // clear 버튼 감춤
  input {
    &::-ms-clear {
      display: none;
    }
  }

  // number type 컨트롤에서 spinner 감춤
  input[type=number] {
    -webkit-appearance: none;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }

  // search type 컨트롤에서 관련 버튼 감춤
  input[type=search] {

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
`;
