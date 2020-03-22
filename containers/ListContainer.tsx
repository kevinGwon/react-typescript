import React, { useRef, useCallback, useEffect } from 'react';
import { TweenMax } from 'gsap';
import Link from 'next/link';
import List from '../components/List';
import { ListType } from '../types/redux/list';

function ListContainer(props: { data: ListType[] }) {
  const $sectionBg = useRef();
  const runBackUpBg = useCallback(obj => {
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
  }, []);
  const runTransition = useCallback(
    $target => {
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
    },
    [runBackUpBg],
  );
  return (
    <List {...props} $sectionBg={$sectionBg} runTransition={runTransition} />
  );
}

export default ListContainer;
