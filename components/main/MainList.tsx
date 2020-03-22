import React, { useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import filterImages from '../../modules/filterImages';
import { ListType } from '../../types/redux/list';

// Components
import MainSection from './MainSection';
import MainSectionBg from './MainSectionBg';
import MainHeading from './MainHeading';

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
    <MainSection active={data[0].category === 'action'}>
      <MainSectionBg bgUrl={data[0].bgImage} $sectionBg={$sectionBg} />
      <StyledLayout>
        <MainHeading category={data[0].category} />
        <MainSwiper data={data} />
      </StyledLayout>
    </MainSection>
  );
}

export default React.memo(MainList);
