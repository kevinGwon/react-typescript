import { createGlobalStyle } from 'styled-components';
import {
  $inputPaddingTb,
  $inputPaddingLr,
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

  [type=text],
  [type=number],
  [type=tel],
  [type=search],
  [type=password],
  [type=email],
  [type=url],
  [type=date],
  [type=datetime-local],
  [type=file],
  select,
  textarea {
    box-sizing: border-box;
    padding: ${$inputPaddingTb} ${$inputPaddingLr};
    border: 1px solid ${rgba($colorPrimary, 0.8)};
    background: transparent;
    color: ${$white};
    font-size: 16px;
    line-height: 1.25;
    outline: none;
    vertical-align: middle;

    -webkit-border-radius: 0;
    -webkit-appearance: none;
    transition: border-color 0.3s;


    &[readonly] {

      &:hover,
      &:focus {
        border-color: ${$silver};
      }
    }

    &[disabled] {
      cursor: not-allowed;
      color: ${$silverDark};
      background: ${$fog};

      &:hover {
        border-color: ${$silver};
      }
    }
  }

  input {
    height: 46px;
  }

  select {
    display: inline-block;
    padding-right: 40px;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-ms-expand {
      display: none;
    }
  }

  textarea {
    max-width: 100%;
    min-height: 100px;
    line-height: 1.6;
  }

  // placeholder 색상
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

  // date type 컨트롤에서 관련 버튼 감춤
  input[type=date],
  input[type=datetime-local] {
    &::-webkit-inner-spin-button {
      display: none;
      margin: 0;
    }

    &::-webkit-clear-button,
    &::-webkit-calendar-picker-indicator {
      display: none;
    }

    &::-webkit-datetime-edit-fields-wrapper {
      padding: 0;
    }
  }

  // input size
  .input {
    &-block {
      display: block;
      width: 100%;
    }

    &--sm {
      padding: ${$inputPaddingTb} - 2px ${$inputPaddingLr};
      font-size: 14px;
      line-height: 14px;
      height: 36px;
    }

    &--lg {
      padding: ${$inputPaddingTb} + 2px ${$inputPaddingLr};
      font-size: 18px;
      line-height: 34px;
      height: 56px;
    }
  }
`;
