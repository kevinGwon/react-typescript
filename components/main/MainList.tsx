import React, { useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import filterImages from '../../modules/filterImages';
import { ListType } from '../../types/redux/list';

// Styled
import { StyledLayout } from '../../styled/global/StyledLayout.style';
import { StyledHeding1 } from '../../styled/global/StyledHeading.style';
import MainSwiper from './MainSwiper';
import {
  StyledMainSection,
  StyledMainSectionBg,
  StyledMainSectionBox,
} from './MainSection.style';

// Swiper Style Modules
import { StyledMainSwiperLazy } from './MainSwiper.style';
import MainSwiperContainer from '../../containers/main/MainSwiperContainer';

function MainList({
  data,
  $sectionBg,
  runSwiper,
}: {
  data: ListType[];
  $sectionBg: React.LegacyRef<HTMLDivElement>;
  runSwiper: (category: string) => void;
}) {
  useEffect(() => {
    let swiper = null;
    if (data[0].category !== 'search') {
      swiper = runSwiper(data[0].category);
    }
    return () => {
      swiper.destroy();
      swiper = null;
    };
  }, []);

  return (
    <>
      <StyledMainSectionBg bgUrl={data[0].bgImage} $sectionBg={$sectionBg} />
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
        <MainSwiperContainer data={data} />
      </StyledLayout>
    </>
  );
}

export default React.memo(MainList);
