import styled, { css } from 'styled-components';

// Variable
import {
  $colorPrimary,
  $white,
} from '../../styled/global/StyledVariable.style';
import { rgba } from '../../styled/mixin';

export const StyledBtn = styled.button.attrs(props => ({
  type: !props.submit ? 'button' : 'submit',
}))`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  ${props =>
    props.block &&
    css`
      width: 100%;
    `}
  overflow: hidden;
  position: relative;
  padding: 15px 26px;
  border: 1px solid ${rgba($colorPrimary, 0.8)};
  box-sizing: border-box;
  background-color: ${props => (props.invert ? $colorPrimary : 'transparent')};
  color: ${props => (props.invert ? $white : $colorPrimary)};
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0;
  vertical-align: middle;
  transition: all 0.2s ease-out;
`;
