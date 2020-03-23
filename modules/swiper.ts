import Swiper from 'swiper';
import { TweenMax } from 'gsap';

const runBackUpBg = ({
  slideLength,
  $section,
  $bg,
  bgUrl,
  classList,
}: {
  slideLength: number;
  $section?: HTMLDivElement;
  $bg?: HTMLDivElement;
  bgUrl: string;
  classList: DOMTokenList;
}) => {
  const $div: HTMLDivElement = document.createElement('div');
  slideLength === 1
    ? $div.classList.add(classList[0], classList[1], 'bg', 'bg--next')
    : $div.classList.add(classList[0], classList[1], 'bg');
  $div.style.backgroundImage = `url('${bgUrl}')`;

  if (slideLength === 1) {
    $bg.after($div);
  } else {
    console.log('------ Slide overFlow || Reset Slide ------');
    $section.prepend($div);
  }
};

const runTransition = $target => {
  const index = $target.snapIndex,
    $slide = $target.slides[index],
    $section: HTMLDivElement =
      $slide.parentNode.offsetParent.offsetParent.offsetParent,
    $bgAll: NodeList = $section.querySelectorAll('.bg'),
    $bg: HTMLDivElement = $section.querySelector('.bg'),
    bgUrl: string = $slide.querySelector('img').getAttribute('data-bg'),
    classList: DOMTokenList = $bg.classList,
    slideLength: number = $bgAll.length;
  if ($bgAll.length > 1) {
    $bgAll.forEach((item: HTMLDivElement) => {
      item.remove();
    });
    runBackUpBg({ slideLength, $section, bgUrl, classList });
    return false;
  }
  let $prev: null | Element = null,
    $current: HTMLDivElement = $bg,
    $next: HTMLDivElement = null;
  runBackUpBg({ slideLength, $bg, bgUrl, classList });
  $next = $section.querySelector('.bg--next');
  $current = $next;
  $prev = $current.previousElementSibling;
  TweenMax.to($next, 1 / 1.5, {
    scale: 1,
  });
  TweenMax.to($prev, 1, {
    autoAlpha: 0,
    onComplete: () => {
      $current.classList.remove('bg--next');
      $prev.remove();
    },
  });
};

const runSwiper = (category: string) => {
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
