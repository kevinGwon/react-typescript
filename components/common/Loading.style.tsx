import styled, { keyframes } from 'styled-components';

// Variable
import { $colorPrimary } from '../../styled/global/StyledVariable.style';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const loadingInner = keyframes`
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
`;

export const StyledLoading = styled.div`
  position: fixed;
  z-index: 100;
  display: block;
  width: 30px;
  height: 30px;
  border: 4px solid ${$colorPrimary};
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -15px;
  animation: ${loading} 2s infinite ease;

  span {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: ${$colorPrimary};
    animation: ${loadingInner} 2s infinite ease-in;
  }
`;
