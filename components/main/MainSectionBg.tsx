import * as React from 'react';
import { StyledMainSectionBg } from './MainSection.style';

function MainSectionBg({
  bgUrl,
  $sectionBg,
}: {
  bgUrl: string;
  $sectionBg: React.LegacyRef<HTMLDivElement>;
}) {
  return <StyledMainSectionBg bgUrl={bgUrl} ref={$sectionBg} />;
}

export default MainSectionBg;
