import styled, { css, keyframes } from 'styled-components';
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
  $colorPrimary,
} from '../../../styled/global/StyledVariable.style';
import { rgba } from '../../../styled/mixin';
import Input from '../Input';
import { NONAME } from 'dns';

export const StyledHeader = styled.header.attrs(props => ({
  id: 'header',
}))`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  height: ${$headerHeightSm}px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.6rem;

  @media (min-width: ${$mqLarge}) {
    height: ${$headerHeightLg}px;
    padding: 0 10px;
  }
`;
export const StyledLayoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  max-width: ${$wWrap}px;
  width: 100%;
  margin: auto;
  padding-left: ${$offsetSm}px;
  padding-right: ${$offsetSm}px;
  box-sizing: border-box;

  @media (min-width: ${$mqMedium}) {
    padding-left: ${$offsetLg}px;
    padding-right: ${$offsetLg}px;
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
  /* .input-search {
    padding: 0;
    border: 0;
    border-bottom: 1px solid ${rgba($white, 0.7)};
  } */
  /* .btn {
    width: 25px;
    padding: 0;
    border: 0;
  } */
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
export const StyledHeaderSearchInput = styled(Input).attrs(props => ({
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

export const StyledHeaderUtils = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${$headerHeightSm}px;
`;

export const StyledHeaderMenuBtn = styled.button`
  overflow: hidden;
  width: 50px;
  height: 50px;
  font-size: 0;

  svg {
    rect {
      fill: ${$colorPrimary};
      height: 2px;
      width: 18px;
    }
    .rect-1 {
      transform: translate(3px, 6px);
    }
    .rect-2 {
      transform: translate(3px, 11px);
    }
    .rect-3 {
      width: 12px;
      transform: translate(3px, 16px);
    }
  }
  &:hover {
    .rect-1 {
      animation: ${rectKeyFramesTop()} 600ms ease-in-out;
    }
    .rect-2 {
      animation: ${rectKeyFramesTop()} 600ms 100ms ease-in-out;
    }
    .rect-3 {
      animation: ${rectKeyFramseBottom()} 600ms 200ms ease-in-out;
    }
  }
`;

function rectKeyFramesTop() {
  return keyframes`
    0% { width: 18px; }
    20% { width: 2px; }
    80% { width: 21px; }
    100% { width: 18px; }
  `;
}

function rectKeyFramseBottom() {
  return keyframes`
    0% { width: 12px; }
    20% { width: 2px; }
    75% { width: 21px; }
    100% { width: 12px; }
  `;
}
