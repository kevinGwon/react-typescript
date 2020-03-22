import * as React from 'react';
import { StyledHeding1 } from '../styled/global/StyledHeading.style';

function MainHeading({ category }: { category: string }) {
  return (
    <StyledHeding1>
      {category === 'action' && '액션 '}
      {category === 'thriller' && '스릴러 '}
      {category === 'crime' && '범죄 '}
      {category === 'war' && '전쟁 '}
      {category === 'horror' && '공포 '}
      {category === 'romance' && '로맨스 '}
      {category === 'animation' && '애니메이션 '}
      영화
    </StyledHeding1>
  );
}

export default MainHeading;
