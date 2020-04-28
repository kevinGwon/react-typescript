import styled, { css, keyframes } from 'styled-components';

// Components
import Input from '../Input';

// Variable
import { rgba } from '../../../styled/mixin';
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

export const StyledHeader = styled.header.attrs(props => ({
  id: 'header',
}))`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  height: ${$headerHeightSm}px;
  width: 100%;
  padding-top: 2.5rem;
  box-sizing: border-box;
  font-size: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(black 5%, transparent);
  }
  .process {
    &::before {
      content: '';
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-right: 1rem;
      border-radius: 50%;
      vertical-align: middle;
      background-color: ${$colorPrimary};
      animation: ${process()} 1s infinite;
    }
    a {
      color: inherit;
    }
    span {
      margin-left: 0.2rem;
    }
  }
  @media (min-width: ${$mqLarge}) {
    height: ${$headerHeightLg}px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: ${$mqMedium}) {
    .process {
      visibility: hidden;
    }
  }
`;
export const StyledLayoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export const StyledHeaderLogo = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  width: 64px;
  margin-top: -28px;
  margin-left: -32px;

  a {
    display: block;
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
  margin-right: 1.5rem;

  svg {
    width: 100%;
  }
`;
export const StyledHeaderSearchInputGroup = styled.div``;

export const StyledHeaderSearchBtn = styled.button.attrs(props => ({
  className: 'btn',
}))`
  width: 25px;
  height: 25px;

  svg {
    fill: ${$white};
  }
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
      fill: ${$white};
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

function process() {
  return keyframes`
    0% { 
        opacity: 1;
     }
    100% { 
        opacity: 0;
     }
  `;
}

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
