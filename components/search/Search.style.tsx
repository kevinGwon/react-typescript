import styled from 'styled-components';

// Variable
import { $mqLarge } from '../../styled/global/StyledVariable.style';

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
    }
  }
`;
