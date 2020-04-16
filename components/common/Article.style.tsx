import styled, { css } from 'styled-components';

// Styled
import {
  $headerHeightSm,
  $mqLarge,
  $headerHeightLg,
} from '../../styled/global/StyledVariable.style';

export const StyledArticle = styled.article.attrs(props => ({
  'data-page': props.page || null,
}))`
  min-height: 100vh;
  box-sizing: border-box;
  font-size: 1.6rem;

  ${props => {
    const size = 30;
    return (
      props.page === 'search' &&
      css`
        min-height: calc(100vh - ${$headerHeightSm}px);
        padding-top: ${$headerHeightSm + size}px;
        padding-bottom: 5rem;

        @media (min-width: ${$mqLarge}) {
          min-height: calc(100vh - ${$headerHeightLg}px);
          padding-top: ${$headerHeightLg + size}px;
        }
      `
    );
  }};

  p {
    line-height: 1.5;
  }
`;
