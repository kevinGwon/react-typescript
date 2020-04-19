import styled from 'styled-components';

// Variable
import { FullPos, rgba } from '../../styled/mixin';
import {
  $black,
  $gray9,
  $gray,
  $colorPrimary,
} from '../../styled/global/StyledVariable.style';

// Styled
import { StyledBtn } from './Btn.style';

export const StyledFormLogo = styled.div`
  max-width: 90px;
  width: 100%;
  margin: 0 auto 2.5rem;
`;
export const StyledForm = styled.div`
  width: 350px;

  input {
    border-color: ${rgba($gray, 0.65)};

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    margin-top: 1rem;
  }
`;
export const StyledLoginBtn = styled(StyledBtn)`
  border-color: ${$gray9};
`;
export const StyledInputError = styled.span.attrs(props => ({
  className: 'is-error',
}))`
  display: block;
  margin: 1.5rem 1.5rem 1.5rem 0.5rem;
  color: ${$colorPrimary};
  font-weight: bold;
  font-size: 1.4rem;
`;
