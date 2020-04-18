import { createGlobalStyle } from 'styled-components';
import StyledReset from './StyledReset.style';
import StyledHelper from './StyledHelper.style';
import StyledForm from './StyledForm.style';
import StyledCommon from './StyledCommon.style';

export default createGlobalStyle`
  ${StyledReset};
  ${StyledHelper};
  ${StyledForm};
  ${StyledCommon};
`;
