import styled, { css } from 'styled-components';

// Variable
import { $black } from '../../styled/global/StyledVariable.style';
import { rgba, FullPos } from '../../styled/mixin';

export const StyledDimLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => props.z || 100};
  background-color: ${rgba($black, 0.9)};

  .DimLayer-inner {
    padding: 0 2rem;
  }
`;
