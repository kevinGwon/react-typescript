import styled from 'styled-components';
import { rgba, FullPos } from '../../../styled/mixin';
import {
  $black,
  $dur,
  $ease,
  $menuWidth,
  $white,
  $colorPrimary,
} from '../../../styled/global/StyledVariable.style';
import { StyledBtn } from '../Btn.style';
import { StyledDimLayer } from '../DimLayer.style';

export const StyledHeaderMenu = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${$menuWidth}px;
  box-sizing: border-box;
  background-color: ${rgba($black, 0.95)};
  transition: transform ${$dur}s ${$ease};
  transform: translateX(100%);

  &::before {
    content: '';
    display: block;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 30px;
    bottom: 30px;
    box-shadow: 0 0 10px 1px ${$colorPrimary};
    opacity: 0;
  }
  &.is-active {
    transform: translateX(0);
    &::before {
      visibility: visible;
      opacity: 1;
      transition: all 0.5s linear;
    }
  }
`;
export const StyledHeaderMenuLayout = styled.div`
  ${FullPos};
  margin: 2rem 2rem 11rem 2rem;
  box-sizing: border-box;
`;
export const StyledHeaderUser = styled.strong`
  font-weight: normal;
`;
export const StyledHeaderLogoutBtn = styled(StyledBtn)`
  position: absolute;
  left: 0;
  bottom: -4rem;
  transform: translateY(100%);
`;
export const StyledHeaderFavorite = styled.ul`
  overflow: auto;
  height: calc(100% - 3rem);
  margin-top: 3rem;
  box-sizing: border-box;

  li.empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;

    & + li {
      margin-top: 2rem;
    }
    a,
    button {
      display: block;
      width: 100%;
      margin-top: 1rem;
      padding: 1rem;
      box-sizing: border-box;
      text-align: center;
      font-size: 1.4rem;
      transition: all ${$dur}s ${$ease};
    }
    a {
      color: ${$white};
      background-color: ${$colorPrimary};
    }
    button {
      color: ${$colorPrimary};
      border: 1px solid ${$colorPrimary};
    }
    img {
      max-width: 130px;
    }
    .info {
      flex-basis: 100%;
      margin-left: 2rem;
    }
  }
  a {
    color: ${$white};
  }
`;
