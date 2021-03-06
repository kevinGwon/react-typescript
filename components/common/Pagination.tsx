import React from 'react';

// Styled
import { StyledPagination } from './Pagination.style';

function Pagination({
  arr,
  page,
  pager,
  runChange,
  runPageArrowChange,
}: {
  arr: number[];
  page: {
    current: number;
    totalPage: number;
  };
  pager: {
    per: number;
    start: number;
    end: number;
  };
  runChange: (current: number) => void;
  runPageArrowChange: (dir: string) => void;
}) {
  return (
    <StyledPagination>
      <button
        type="button"
        onClick={() => runPageArrowChange('prev')}
        className={pager.start === 1 ? 'is-hidden' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fill="#333"
            d="M10.17 14l.66-.67L5.5 8l5.33-5.33-.66-.67-6 6 6 6z"
            data-name="Icon - Left Arrow"
          />
        </svg>
        <span className="a11y">prev arrow</span>
      </button>
      {arr.map(index => (
        <a
          href={`#${index}`}
          key={index}
          className={page.current === index ? 'is-current' : ''}
          onClick={() => {
            if (index === page.current) return false;
            runChange(index);
          }}
        >
          {index}
        </a>
      ))}
      <button
        type="button"
        onClick={() => runPageArrowChange('next')}
        className={page.totalPage <= pager.end ? 'is-hidden' : ''}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fill="#333"
            d="M5.83 14l-.66-.67L10.5 8 5.17 2.67 5.83 2l6 6-6 6z"
            data-name="Icon - Right Arrow"
          />
        </svg>
        <span className="a11y">next arrow</span>
      </button>
    </StyledPagination>
  );
}

export default Pagination;
