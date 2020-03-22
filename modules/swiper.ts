import Swiper from 'swiper';
import { TweenMax } from 'gsap';

const runBackUpBg = obj => {
  const $div = document.createElement('div');
  obj.slideLength === 1
    ? $div.classList.add(
        obj.classList[0],
        obj.classList[1],
        'movie-section-bg',
        'movie-section-bg--next',
      )
    : $div.classList.add(
        obj.classList[0],
        obj.classList[1],
        'movie-section-bg',
      );
  $div.style.backgroundImage = `url('${obj.bgUrl}')`;

  if (obj.slideLength === 1) {
    obj.$bg.after($div);
  } else {
    console.log('------ Slide overFlow || Reset Slide ------');
    obj.$section.prepend($div);
  }
};

const runTransition = $target => {
  const index = $target.snapIndex,
    $slide = $target.slides[index],
    $section = $slide.parentNode.offsetParent.offsetParent.offsetParent,
    $bgAll = $section.querySelectorAll('.movie-section-bg'),
    $bg = $section.querySelector('.movie-section-bg'),
    bgUrl = $slide.querySelector('img').getAttribute('data-bg'),
    classList = $bg.classList,
    slideLength = $bgAll.length;
  if ($bgAll.length > 1) {
    $bgAll.forEach(item => {
      item.remove();
    });
    runBackUpBg({ slideLength, $section, bgUrl, classList });
    return false;
  }
  let $prev = null,
    $current = $bg,
    $next = null;
  runBackUpBg({ slideLength, $bg, bgUrl, classList });
  $next = $section.querySelector('.movie-section-bg--next');
  $current = $next;
  $prev = $current.previousElementSibling;
  TweenMax.to($next, 1 / 1.5, {
    scale: 1,
  });
  TweenMax.to($prev, 1, {
    autoAlpha: 0,
    onComplete: () => {
      $current.classList.remove('movie-section-bg--next');
      $prev.remove();
    },
  });
};

const runSwiper = category => {
  return new Swiper(`.swiper-container-${category}`, {
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
};

export default runSwiper;
