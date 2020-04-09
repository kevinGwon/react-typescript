import { createGlobalStyle } from 'styled-components';
import StyledReset from './StyledReset.style';
import StyledHelper from './StyledHelper.style';
import StyledForm from './StyledForm.style';
import StyledStateStyle from './StyledState.style';

export default createGlobalStyle`
  ${StyledReset};
  ${StyledHelper};
  ${StyledForm};
  ${StyledStateStyle};
`;
