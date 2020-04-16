import React, { useEffect, ReactNode, ReactHTMLElement } from 'react';
import Swiper from 'swiper';

// Modules
import filterImages from '../../modules/filterImages';

// Scss
import '../../scss/swiper.scss';

// Styled
import { StyledLayout } from '../../styled/global/StyledLayout.style';
import {
  StyledDetailCover,
  StyledDetailSection,
  StyledDetailLayout,
} from './Detail.style';

// Types
import { ListType } from '../../types/redux/list';

// Components
import DetailHeader from './DetailHeader';
import DetailContents from './DetailContents';
import DetailFavorite from './DetailFavorite';

function Detail({
  API,
  account,
  session,
  favorite,
  scrollToUp,
  runAddFavorite,
}: {
  API: any;
  account: number;
  session: string;
  favorite: any[];
  scrollToUp: () => void;
  runAddFavorite: (
    account: number,
    session: string,
    id: number,
    active: boolean,
  ) => void;
}) {
  const {
    id,
    title,
    backdrop_path,
    posterImage,
    genres,
    average,
    date,
    overview,
    cast,
    similar,
  } = API;
  const isLike = favorite.some(item => {
    return item.id === id;
  });
  useEffect(() => {
    if (!similar.length) return;
    let swiper = null;
    swiper = new Swiper('.swiper-container', {
      lazy: true,
      parallax: true,
      centeredSlides: false,
      slidesPerView: 3.5,
      spaceBetween: 10,
      grabCursor: true,
      speed: 800,
      breakpoints: {
        1024: {
          slidesPerView: 5.2,
        },
      },
    });
    return () => {
      if (!similar.length) return;
      swiper.destroy();
      swiper = null;
    };
  }, [similar]);
  return (
    <>
      <StyledDetailCover
        bgUrl={
          filterImages(backdrop_path)
            ? backdrop_path
            : 'url("http://placehold.it/3840x2160?text=Not Found")'
        }
      ></StyledDetailCover>
      <StyledDetailSection>
        <StyledLayout>
          <StyledDetailLayout>
            {/* Header */}
            <DetailHeader API={API} filterImages={filterImages} />
            {/* Favorite */}
            {!isLike && (
              <DetailFavorite
                API={API}
                account={account}
                session={session}
                runAddFavorite={runAddFavorite}
              />
            )}
            {/* Contents */}
            <DetailContents
              API={API}
              scrollToUp={scrollToUp}
              filterImages={filterImages}
            />
          </StyledDetailLayout>
        </StyledLayout>
      </StyledDetailSection>
    </>
  );
}

export default React.memo(Detail);
