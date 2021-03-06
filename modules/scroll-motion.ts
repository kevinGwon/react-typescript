import React from 'react';

class ScrollMotion {
  DOWN: string;
  UP: string;
  isDestroy: null | boolean;
  isActive: string;
  isAnimated: string;
  lastScrollTop: number;
  dir: null | number | string;
  isMove: boolean;
  index: number;
  sectionLength: number;
  eventMap: object;
  eventWheel: string;
  $sectionBox: HTMLDivElement | null;
  $section: NodeListOf<HTMLElement> | null;
  $indicatorBtn: NodeListOf<Element> | null;
  $footer: HTMLElement | null;
  constructor() {
    this.DOWN = 'DOWN';
    this.UP = 'UP';
    this.isDestroy = null;
    this.isActive = 'is-active';
    this.isAnimated = 'is-animated';
    this.lastScrollTop = 0;
    this.dir = null;
    this.isMove = false;
    this.index = 0;
    this.sectionLength = 0;
    this.eventMap = {};
    this.eventWheel = 'wheel.onWheel';
    this.$sectionBox = null;
    this.$section = null;
    this.$indicatorBtn = null;
    this.$footer = null;
  }

  init() {
    this.$footer = document.querySelector('#footer');
    this.$sectionBox = document.querySelector('.movie-section-box');
    this.$section = this.$sectionBox.querySelectorAll('section');
    this.$indicatorBtn = this.$sectionBox.querySelectorAll('.indicator button');
    this.sectionLength = this.$section.length - 1;

    setTimeout(() => {
      // Hash값 존재하는지 체크
      const index = Number(window.location.hash[1]);
      // Hash값 할당
      this.index = index || this.index;
      // Hash값이 존재할때 첫번째 Section 기본 Active 제거
      this.index && this.$section[0].classList.remove(this.isActive);

      this.$sectionBox.classList.add('is-loaded');
      this.$section[this.index].classList.add(this.isActive);
      this.$indicatorBtn[this.index].classList.add(this.isActive);
    }, 500);

    this.runIndicator();
    this.runEventScroll();
  }

  runEventScroll() {
    console.log('[ Add scrollMotion ]');
    this.eventMap[this.eventWheel] = this.runScroll.bind(this);
    document.addEventListener('wheel', this.eventMap[this.eventWheel], {
      passive: false,
    });
    this.isDestroy = false;
  }

  runScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    let dirValue = e.wheelDelta / 120 || e.deltaY / -120;
    this.dir = !(dirValue > 0) ? this.DOWN : this.UP;
    this.runGetDir(this.dir);
  }

  runOnlock() {
    setTimeout(() => {
      this.isMove = false;
    }, 1200);
  }

  runGetDir(dir: number | string) {
    if (this.isMove) return;
    this.runDetect(dir);
  }

  runDetect(dir: number | string) {
    dir === this.UP ? --this.index : ++this.index;

    if (this.index <= 0) {
      this.index = 0;
    } else if (this.index >= this.sectionLength) {
      this.index = this.sectionLength;
    }

    this.runMoveTo(dir);
  }

  runAddClass(dir: number | string) {
    for (let i = 0; i <= this.sectionLength; i++) {
      if (
        this.index === 0 &&
        this.$section[0].classList.contains(this.isActive)
      ) {
        this.runOnlock();
        return;
      }

      if (
        this.index === this.sectionLength &&
        this.$section[this.sectionLength].classList.contains(this.isActive)
      ) {
        this.runOnlock();
        return;
      }

      // footer show & hide
      if (this.index === this.sectionLength) {
        this.$footer.classList.add('is-toggle');
      } else {
        this.$footer.classList.remove('is-toggle');
      }

      if (this.$section[i].classList.contains(this.isActive)) {
        // Active section
        this.$section[i].classList.remove(this.isActive);
        // Active indicator
        this.$indicatorBtn[i].classList.remove(this.isActive);

        if (dir !== 0 && dir === this.UP) {
          i && this.$section[i - 1].classList.remove(this.isAnimated);
        }
      }
    }

    // Active hash
    window.location.hash = String(this.index);
    // Active indicator
    this.$indicatorBtn[this.index].classList.add(this.isActive);
    // Active section
    this.$section[this.index].classList.add(this.isActive);

    if (dir === this.DOWN) {
      if (Number(dir) === 0) return;
      this.$section[this.index - 1].classList.add(this.isAnimated);
    }
  }

  runMoveTo(dir?: number | string) {
    this.isMove = true;

    console.log(`[ Scroll = ${this.index} / ${this.sectionLength} ]`);
    this.runAddClass(dir);
    this.runOnlock();
  }

  runIndicator() {
    for (let i = 0; i <= this.$indicatorBtn.length - 1; i++) {
      this.$indicatorBtn[i].addEventListener('click', () => {
        this.index = i;
        this.runMoveTo();
      });
    }
  }

  destroy() {
    console.log('[ Destroy ScrollMotion ]');
    this.$footer && this.$footer.classList.remove('is-toggle');
    document.removeEventListener('wheel', this.eventMap[this.eventWheel]);
    delete this.eventMap[this.eventWheel];
    this.isDestroy = true;
    this.index = 0;
  }
}

export default ScrollMotion;
