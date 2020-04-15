import styled from 'styled-components';

// Components
import Input from './Input';

// Variable
import { $white } from '../../styled/global/StyledVariable.style';

export const StyledSearchUI = styled(Input).attrs(props => ({
  type: 'search',
}))`
  height: 56px;
  min-width: 250px;
  padding-right: 3.5rem;
  border: none;
  border-bottom: 1px solid ${$white};
  font-size: 2.5rem;

  & + svg {
    width: 25px;
    height: 25px;
    margin-left: -3rem;
    fill: ${$white};
    transform: translateY(7px);
  }
`;
