import * as React from 'react';
import { CategoryType } from '../redux/reducers/list';
import { TweenMax } from 'gsap';
import Swiper from 'swiper';
import Link from 'next/link';
import filterImages from '../modules/filterImages';

function List(data: CategoryType) {
  const $sectionBg = React.useRef();

  const runBackUpBg = React.useCallback(obj => {
    const $div = document.createElement('div');
    obj.slideLength === 1
      ? $div.classList.add('movie-section-bg', 'movie-section-bg--next')
      : $div.classList.add('movie-section-bg');
    $div.style.backgroundImage = `url('${obj.bgUrl}')`;

    if (obj.slideLength === 1) {
      obj.$bg.after($div);
    } else {
      console.log('------ Slide overFlow || Reset Slide ------');
      obj.$section.prepend($div);
    }
  }, []);

  const runTransition = React.useCallback(
    $target => {
      const index = $target.snapIndex,
        $slide = $target.slides[index],
        $section = $slide.parentNode.offsetParent.offsetParent.offsetParent,
        $bgAll = $section.querySelectorAll('.movie-section-bg'),
        $bg = $section.querySelector('.movie-section-bg'),
        bgUrl = $slide.querySelector('img').getAttribute('data-bg'),
        slideLength = $bgAll.length;

      if ($bgAll.length > 1) {
        $bgAll.forEach(item => {
          item.remove();
        });
        runBackUpBg({ slideLength, $section, bgUrl });
        return false;
      }

      let $prev = null,
        $current = $bg,
        $next = null;

      runBackUpBg({ slideLength, $bg, bgUrl });

      $next = $section.querySelector('.movie-section-bg--next');
      $current = $next;
      $prev = $current.previousElementSibling;

      TweenMax.to($next, 1 / 1.5, {
        scale: 1,
      });

      TweenMax.to($prev, 1, {
        autoAlpha: 0,
        rotation: -25,
        onComplete: () => {
          $current.classList.remove('movie-section-bg--next');
          $prev.remove();
        },
      });
    },
    [runBackUpBg],
  );

  React.useEffect(() => {
    let swiper = null;
    if (data.category !== 'search') {
      setTimeout(() => {
        swiper = new Swiper(`.swiper-container-${data.category}`, {
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
      }, 500);
    }
    return () => {
      swiper.destroy();
      swiper = null;
    };
  }, [data.category, runTransition]);

  return (
    <section
      className={`movie-section${
        data.category === 'action' ? ' is-active' : ''
      }`}
    >
      <div
        className="movie-section-bg"
        style={
          data.list[0] && {
            backgroundImage: `url('${data.list[0].bgImage}')`,
          }
        }
        ref={$sectionBg}
      ></div>
      <div className="l-wrap">
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
        <div className={`swiper-container swiper-container-${data.category}`}>
          <div className="swiper-wrapper">
            {data.list.map(item => (
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
                        alt=""
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
