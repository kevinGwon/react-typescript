import styled from 'styled-components';
import {
  $mqMedium,
  $mqLarge,
  $dur,
  $colorPrimary,
  $headerHeightSm,
} from '../../styled/global/StyledVariable.style';

export const StyledMainIndicator = styled.div.attrs(props => ({
  className: 'indicator',
}))`
  @media (min-width: ${$mqMedium}) {
    position: fixed;
    z-index: 100;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);

    button {
      & + button {
        margin-top: 1.5rem;
      }
    }
  }
  @media (min-width: ${$mqLarge}) {
    left: 100px;
  }
  @media (max-width: ${$mqMedium}) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: ${$headerHeightSm};
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;

    button {
      color: inherit;
      text-transform: capitalize;
      font-size: 1.6rem;
      margin-left: 1rem;
      margin-top: 1rem;
      padding: 0.5rem 0.8rem;

      &:first-child {
        margin-left: 0;
      }
      &.is-active {
      }
    }
  }
`;
export const StyledMainIndicatorBtn = styled.button.attrs(props => ({
  type: 'button',
}))`
  display: block;
  position: relative;
  color: inherit;
  font-size: 1.6rem;
  letter-spacing: 0.08rem;
  text-transform: capitalize;
  padding: 1rem;
  text-align: left;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 0%;
    margin-top: -1px;
    border-bottom: 2px solid ${$colorPrimary};
    transition: width ${$dur} ease;
  }
  &.is-active {
    &::before {
      width: 100%;
    }
  }
`;
