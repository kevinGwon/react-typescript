import React from 'react';
import {
  StyledHeaderSearch,
  StyledHeaderForm,
  StyledHeaderSearchInputGroup,
  StyledHeaderSearchInput,
  StyledHeaderSearchBtn,
} from './Header.style';

function HeaderSearch({
  searchActive,
  runSubmit,
  runSearchActive,
}: {
  searchActive: boolean;
  runSubmit: (e: React.FormEvent) => void;
  runSearchActive: () => void;
}) {
  return (
    <StyledHeaderSearch active={searchActive}>
      <StyledHeaderForm onSubmit={runSubmit}>
        <StyledHeaderSearchInputGroup>
          <StyledHeaderSearchInput placeholder="제목을 입력하세요" />
          <StyledHeaderSearchBtn onClick={runSearchActive}>
            <svg viewBox="0 0 483.083 483.083">
              <g>
                <g>
                  <path
                    d="M332.74,315.35c30.883-33.433,50.15-78.2,50.15-127.5C382.89,84.433,298.74,0,195.04,0S7.19,84.433,7.19,187.85
            S91.34,375.7,195.04,375.7c42.217,0,81.033-13.883,112.483-37.4l139.683,139.683c3.4,3.4,7.65,5.1,11.9,5.1s8.783-1.7,11.9-5.1
            c6.517-6.517,6.517-17.283,0-24.083L332.74,315.35z M41.19,187.85C41.19,103.133,110.04,34,195.04,34
            c84.717,0,153.85,68.85,153.85,153.85S280.04,341.7,195.04,341.7S41.19,272.567,41.19,187.85z"
                  />
                </g>
              </g>
            </svg>
          </StyledHeaderSearchBtn>
        </StyledHeaderSearchInputGroup>
      </StyledHeaderForm>
    </StyledHeaderSearch>
  );
}

export default HeaderSearch;
