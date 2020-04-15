import styled from 'styled-components';

// Variable
import { $ease } from '../../styled/global/StyledVariable.style';

export const StyledFooter = styled.footer.attrs(props => ({
  id: 'footer',
}))`
  position: relative;
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.4rem;
  transition: all 0.2s ${$ease};

  &.is-fixed {
    position: fixed;
    z-index: 100;
    opacity: 1;
  }
  &.is-toggle {
    transform: translateY(-100%);
  }
`;
