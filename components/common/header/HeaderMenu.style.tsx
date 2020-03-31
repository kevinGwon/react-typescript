import styled from 'styled-components';
import { rgba, FullPos } from '../../../styled/mixin';
import {
  $black,
  $dur,
  $ease,
  $menuWidth,
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
  transition: transform ${$dur} ${$ease};
  transform: translateX(100%);

  &.is-active {
    transform: translateX(0);
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
`;
