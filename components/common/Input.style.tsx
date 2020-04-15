import styled, { css } from 'styled-components';

// Variable
import {
  $inputPaddingTb,
  $inputPaddingLr,
  $colorPrimary,
  $white,
} from '../../styled/global/StyledVariable.style';

export const StyledInput = styled.input`
  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  height: 46px;
  box-sizing: border-box;
  padding: ${$inputPaddingTb}px ${$inputPaddingLr}px;
  border: 1px solid ${$colorPrimary};
  background: transparent;
  color: ${$white};
  font-size: 16px;
  line-height: 1.25;
  outline: none;
  vertical-align: middle;
  transition: border-color 0.3s;
`;
