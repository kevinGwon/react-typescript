import React from 'react';

// Styled
import { StyledPagination } from './Pagination.style';

function Pagination({
  arr,
  start,
  end,
}: {
  arr: any[];
  start: number;
  end: number;
}) {
  let pager = [];
  for (let i = start; i < arr.length; i++) {
    let count = 1;
    if (i % 9 === 0) {
      pager = pager.concat([count++]);
    }
  }
  return (
    <StyledPagination>
      {pager.map(num => (
        <a href={`#${num}`} key={num}>
          {num}
        </a>
      ))}
    </StyledPagination>
  );
}

export default Pagination;
