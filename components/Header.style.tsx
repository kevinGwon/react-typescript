import styled from 'styled-components';
import {
  $wWrap,
  $offsetSm,
  $mqLarge,
  $headerHeightLg,
  $headerHeightSm,
  $white,
  $dur,
  $ease,
  $mqMedium,
  $offsetLg,
} from '../styled/global/StyledVariable.style';
import { rgba } from '../styled/mixin';

export const StyledHeader = styled.header.attrs(props => ({
  id: 'header',
}))`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: ${$headerHeightSm};
  width: 100%;
  box-sizing: border-box;
  font-size: 1.6rem;

  @media (min-width: ${$mqLarge}) {
    height: ${$headerHeightLg};
    padding: 0 10px;
  }
`;
export const StyledLayoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  max-width: ${$wWrap};
  width: 100%;
  margin: auto;
  padding-left: ${$offsetSm};
  padding-right: ${$offsetSm};
  box-sizing: border-box;

  @media (min-width: ${$mqMedium}) {
    padding-left: ${$offsetLg};
    padding-right: ${$offsetLg};
  }
`;
export const StyledHeaderForm = styled.form`
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 0;
  width: 100%;
`;
export const StyledHeaderSearch = styled.div.attrs(props => ({
  className: props.active ? 'is-active' : '',
}))`
  position: relative;
  z-index: 10;
  width: 0%;
  box-sizing: border-box;

  &.is-active {
    width: 100%;
    transition: width 0.2s ${$ease};
  }
  .input-search {
    padding: 0;
    border: 0;
    border-bottom: 1px solid ${rgba($white, 0.7)};
  }
  .btn {
    width: 25px;
    padding: 0;
    border: 0;
  }
  svg {
    fill: ${$white};
    width: 100%;
  }
  @media (min-width: ${$mqLarge}) {
    margin-right: 0;

    &.is-active {
      width: 40%;
    }
  }
`;
export const StyledHeaderSearchInputGroup = styled.div.attrs(props => ({
  className: 'input-group',
}))`
  width: 100%;
  padding-right: 30px;
`;
export const StyledHeaderSearchInput = styled.input.attrs(props => ({
  type: 'search',
  className: 'input-search',
}))`
  width: 100%;
`;
export const StyledHeaderSearchBtn = styled.button.attrs(props => ({
  type: 'button',
  className: 'btn',
}))`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
