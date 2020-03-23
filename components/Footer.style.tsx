import styled from 'styled-components';
import { $ease } from '../styled/global/StyledVariable.style';

export const StyledFooter = styled.footer.attrs(props => ({
  id: 'footer',
}))`
  position: fixed;
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.4rem;
  transition: all 0.2s ${$ease};

  &.is-toggle {
    position: relative;
    z-index: 100;
    opacity: 1;
    transform: translateY(-100%);
  }
`;
