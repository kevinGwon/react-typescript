import React, { useEffect, useState } from 'react';

// Styled
import { StyledError } from '../styled/global/StyledError.style';

function Error() {
  let [count, setCount] = useState(3);
  useEffect(() => {
    setInterval(() => {
      setCount(--count);
    }, 1000);
    if (count === 1) {
      location.href = '/';
    }
  }, [count]);
  return (
    <StyledError>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>{count}초 후 홈으로 이동합니다.</p>
    </StyledError>
  );
}

export default Error;
