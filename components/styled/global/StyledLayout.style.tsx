import styled from 'styled-components';
import { $wWrap, $offsetSm, $offsetLg } from './StyledVariable.style';

export const StyledLayout = styled.div.attrs(props => ({
  className: 'l-wrap',
}))`
  position: relative;
  z-index: 1;
  max-width: ${$wWrap};
  width: 100%;
  padding-left: ${$offsetSm};
  padding-right: ${$offsetSm};
  box-sizing: border-box;

  @media (min-width: 720px) {
    width: 100%;
    padding-left: ${$offsetLg};
    padding-right: ${$offsetLg};
    margin-left: auto;
    margin-right: auto;
  }
`;
