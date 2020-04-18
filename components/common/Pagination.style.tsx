import styled from 'styled-components';

// Variable
import {
  $white,
  $colorPrimary,
} from '../../styled/global/StyledVariable.style';

export const StyledPagination = styled.div`
  margin-top: 5rem;
  text-align: center;

  button,
  a {
    vertical-align: middle;
  }
  svg,
  path {
    width: 30px;
    height: 30px;
    fill: ${$white};
  }
  button {
    font-size: 0;

    &.is-hidden {
      visibility: hidden;
    }
  }
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 0.5rem;
    box-sizing: border-box;
    line-height: 27px;
    color: ${$white};

    &.is-current {
      border-bottom: 2px solid ${$colorPrimary};
      color: ${$colorPrimary};
    }
    &:hover,
    &:focus {
      color: ${$colorPrimary};
      border-color: ${$colorPrimary};
    }
  }
`;
