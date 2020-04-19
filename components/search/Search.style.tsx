import styled from 'styled-components';

// Variable
import {
  $mqLarge,
  $colorPrimary,
} from '../../styled/global/StyledVariable.style';
import { rgba } from '../../styled/mixin';

export const StyledSearchForm = styled.form`
  display: block;
  max-width: 500px;
  width: 100%;
  margin: auto;

  input {
    width: 100%;
  }
`;

export const StyledSearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-left: -2rem;

  li {
    width: 50%;
    margin-top: 2rem;

    &.no-item {
      width: 100%;
      text-align: center;
    }
    &.last-item {
      display: none;
    }
  }
  a {
    display: block;
    height: 100%;
    margin-left: 2rem;
  }
  img {
    object-fit: cover;
    height: 100%;
    max-height: 450px;
    width: 100%;
  }

  @media (min-width: ${$mqLarge}) {
    padding: 0 8rem;

    li {
      width: ${100 / 3}%;

      &.last-item {
        display: block;
        opacity: 0.4;

        .last-item-border {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 2rem;
          height: 100%;
          border-right: 2px solid ${$colorPrimary};
          border-bottom: 2px solid ${$colorPrimary};
          box-sizing: border-box;
        }
        svg {
          height: 25%;
          width: 25%;
        }
      }
    }
  }
`;
