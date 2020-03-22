import * as React from 'react';
import Link from 'next/link';
import '../../scss/swiper.scss';

// Modules
import filterImages from '../../modules/filterImages';

// Types
import { ListType } from '../../types/redux/list';

// Styled
import {
  StyledSwiperContainer,
  StyledSwiperSlide,
  StyledSwiperLazy,
  StyledSwiperPagination,
  StyledSwiperButton,
} from './MainSwiper.style';

function MainSwiper({ data }: { data: ListType[] }) {
  return (
    <StyledSwiperContainer category={data[0].category}>
      <div className="swiper-wrapper">
        {data.map(item => (
          <StyledSwiperSlide key={item.id} className="swiper-slide">
            <Link href="/detail/[id]" as={`/detail/${item.id}`}>
              <a>
                <div className="thumb">
                  <img
                    data-src={
                      filterImages(item.posterImage)
                        ? item.posterImage
                        : 'http://placehold.it/500x747?text=Not Found'
                    }
                    data-bg={
                      filterImages(item.bgImage)
                        ? item.bgImage
                        : 'http://placehold.it/3840x2160?text=Not Found'
                    }
                    className="swiper-lazy"
                    alt=""
                  />
                  <div className="thumb-info a11y">
                    <h3>{item.title}</h3>
                    <p>{item.overview}</p>
                  </div>
                  <StyledSwiperLazy />
                </div>
              </a>
            </Link>
          </StyledSwiperSlide>
        ))}
      </div>

      {/* Pagination */}
      <StyledSwiperPagination />

      {/* Arrow */}
      <StyledSwiperButton dir={'prev'} />
      <StyledSwiperButton dir={'next'} />
    </StyledSwiperContainer>
  );
}

export default MainSwiper;
