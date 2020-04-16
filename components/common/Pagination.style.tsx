import styled from 'styled-components';

// Variable
import {
  $white,
  $colorPrimary,
} from '../../styled/global/StyledVariable.style';

export const StyledPagination = styled.div`
  margin-top: 5rem;
  text-align: center;

  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 0.5rem;
    line-height: 30px;
    border-top: 1px solid ${$colorPrimary};
    border-radius: 50%;
    color: ${$white};

    &:hover,
    &:focus {
      color: ${$colorPrimary};
      border-color: ${$colorPrimary};
    }
  }
`;
