import styled from 'styled-components';
import { $black } from '../../styled/global/StyledVariable.style';
import { rgba, FullPos } from '../../styled/mixin';

export const StyledDimLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${rgba($black, 0.9)};
`;
