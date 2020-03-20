import React, { useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Swiper from 'swiper';
import filterImages from '../modules/filterImages';
import { ListType } from '../types/redux/list';

function List({
  data,
  $sectionBg,
  runTransition,
}: {
  data: ListType;
  $sectionBg: () => void;
  runTransition: any;
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
    <section
      className={`movie-section${
        data[0].category === 'action' ? ' is-active' : ''
      }`}
    >
      <div
        className="movie-section-bg"
        style={
          data[0] && {
            backgroundImage: `url('${data[0].bgImage}')`,
          }
        }
        ref={$sectionBg}
      ></div>
      <div className="l-wrap">
        <h2 className="h1">
          {data[0].category === 'action' && '액션 '}
          {data[0].category === 'thriller' && '스릴러 '}
          {data[0].category === 'crime' && '범죄 '}
          {data[0].category === 'war' && '전쟁 '}
          {data[0].category === 'horror' && '공포 '}
          {data[0].category === 'romance' && '로맨스 '}
          {data[0].category === 'animation' && '애니메이션 '}
          영화
        </h2>
        <div
          className={`swiper-container swiper-container-${data[0].category}`}
        >
          <div className="swiper-wrapper">
            {data.map(item => (
              <div key={item.id} className="swiper-slide">
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
                        alt={item.title}
                      />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="swiper-pagination"></div>

          {/* Arrow */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(List);
