import React, { useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Swiper from 'swiper';
import filterImages from '../modules/filterImages';
import { ListType } from '../types/redux/list';

// Styled
import {
  StyledSwiperContainer,
  StyledSwiperPagination,
  StyledSwiperButton,
  StyledSwiperSlide,
} from '../styled/components/StyledSwiper';
import {
  StyledMovieSection,
  StyledMovieSectionBg,
} from '../styled/components/StyledMovieSection';
import { StyledSwiperLazy } from '../styled/components/StyledSwiper';

// Swiper Style Modules
import '../scss/swiper.scss';
import { StyledLayout } from '../styled/components/StyledLayout';
import { StyledHeding1 } from '../styled/global/StyledHeading';

function List({
  data,
  $sectionBg,
  runTransition,
}: {
  data: ListType[];
  $sectionBg: React.LegacyRef<HTMLDivElement>;
  runTransition: ($target: any) => void;
}) {
  useEffect(() => {
    let swiper = null;
    if (data[0].category !== 'search') {
      swiper = new Swiper(`.swiper-container-${data[0].category}`, {
        lazy: true,
        parallax: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 5,
        grabCursor: true,
        speed: 800,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 50, // Slide rotate in degrees
          stretch: 0, // Stretch space between slides (in px)
          depth: 100, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true, // Enables slides shadows
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChange() {
            runTransition(this);
          },
        },
      });
    }
    return () => {
      swiper.destroy();
      swiper = null;
    };
  }, [runTransition]);

  return (
    <StyledMovieSection active={data[0].category === 'action'}>
      <StyledMovieSectionBg
        bgUrl={`url('${data[0].bgImage}')`}
        ref={$sectionBg}
      />
      <StyledLayout>
        <StyledHeding1>
          {data[0].category === 'action' && '액션 '}
          {data[0].category === 'thriller' && '스릴러 '}
          {data[0].category === 'crime' && '범죄 '}
          {data[0].category === 'war' && '전쟁 '}
          {data[0].category === 'horror' && '공포 '}
          {data[0].category === 'romance' && '로맨스 '}
          {data[0].category === 'animation' && '애니메이션 '}
          영화
        </StyledHeding1>
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
      </StyledLayout>
    </StyledMovieSection>
  );
}

export default React.memo(List);
