import * as React from 'react';

function ListSwiper(data) {
  return (
    <section className="movie-section">
      <h2 className="h1">
        {data.category === 'action' && '액션 '}
        {data.category === 'thriller' && '스릴러 '}
        {data.category === 'crime' && '범죄 '}
        {data.category === 'war' && '전쟁 '}
        {data.category === 'horror' && '공포 '}
        {data.category === 'romance' && '로맨스 '}
        {data.category === 'animation' && '애니메이션 '}
        영화
      </h2>
    </section>
  );
}

export default ListSwiper;
