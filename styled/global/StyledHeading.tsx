import styled, { css } from 'styled-components';

const HeadingStyle = css`
  line-height: 1.4;
  letter-spacing: -0.02em;
  margin-bottom: 0.5em;
`;

export const StyledHeding1 = styled.h1`
  ${HeadingStyle};
  font-size: 4.6rem;
`;
export const StyledHeding2 = styled.h2`
  ${HeadingStyle};
  font-size: 3rem;
`;
export const StyledHeding3 = styled.h3`
  ${HeadingStyle};
  font-size: 2.4rem;
`;
export const StyledHeding4 = styled.h4`
  ${HeadingStyle};
  font-size: 2rem;
`;
export const StyledHeding5 = styled.h5`
  ${HeadingStyle};
  font-size: 1.8rem;
`;
export const StyledHeding6 = styled.h6``;

// sub fonts
// .sub-h1 {
//   // font-family: $en;
//   font-size: 3.6em;
//   font-weight: bold;

//   @include mq(medium) {
//     font-size: 4.6em;
//   }
// }

// .sub-h2 {
//   // font-family: $en;
//   font-size: 3em;
//   font-weight: bold;
// }
