import styled from 'styled-components';
import {
  $wWrap,
  $offsetSm,
  $offsetLg,
  $mqMedium,
} from './StyledVariable.style';

export const StyledLayout = styled.div.attrs(props => ({
  className: 'l-wrap',
}))`
  position: relative;
  z-index: 1;
  max-width: ${$wWrap}px;
  width: 100%;
  padding-left: ${$offsetSm}px;
  padding-right: ${$offsetSm}px;
  box-sizing: border-box;

  @media (min-width: ${$mqMedium}) {
    width: 100%;
    padding-left: ${$offsetLg}px;
    padding-right: ${$offsetLg}px;
    margin-left: auto;
    margin-right: auto;
  }
`;
