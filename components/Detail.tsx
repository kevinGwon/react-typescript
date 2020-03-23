import React, { useEffect } from 'react';
import { StyledLayout } from '../styled/global/StyledLayout.style';
import { ListType } from '../types/redux/list';
import filterImages from '../modules/filterImages';
import Link from 'next/link';
import Swiper from 'swiper';
import {
  StyledDetailCover,
  StyledDetailSection,
  StyledDetailHeader,
  StyledDetailHeaderInner,
  StyledDetailImg,
  StyledDetailLayout,
  StyledDetailStarRatings,
  StyledDetailInfo,
  StyledDetailDate,
  StyledDetailCategory,
  StyledDetailTitle,
  StyledDetailContent,
  StyledDetailParagrap,
  StyledDetailCast,
} from './Detail.style';
import StarRatings from 'react-star-ratings';
import {
  StyledHeding2,
  StyledHeding5,
} from '../styled/global/StyledHeading.style';
import '../scss/swiper.scss';
function Detail({ API, scrollToUp }: { API: any; scrollToUp: () => void }) {
  const {
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
            <StyledDetailHeader>
              <StyledDetailHeaderInner>
                <StyledDetailImg>
                  <img
                    src={
                      filterImages(posterImage)
                        ? posterImage
                        : 'http://placehold.it/500x747?text=Not Found'
                    }
                    alt=""
                  />
                  <StyledDetailStarRatings>
                    <StarRatings
                      rating={average / 2}
                      numberOfStars={5}
                      starDimension="12px"
                      starSpacing="2px"
                      starRatedColor="#e50914"
                      name="rating"
                    />
                  </StyledDetailStarRatings>
                  <StyledDetailInfo>
                    <StyledDetailDate>{date}</StyledDetailDate>
                    <StyledDetailTitle>{title}</StyledDetailTitle>
                    <StyledDetailCategory>
                      {genres.map(item => (
                        <li key={item.id}>#{item.name}</li>
                      ))}
                    </StyledDetailCategory>
                  </StyledDetailInfo>
                </StyledDetailImg>
              </StyledDetailHeaderInner>
            </StyledDetailHeader>

            {/* Contents */}
            <StyledDetailContent>
              {/* 줄거리 */}
              <StyledHeding5>줄거리</StyledHeding5>
              <StyledDetailParagrap>
                {overview ? overview : '등록된 줄거리가 없습니다.'}
              </StyledDetailParagrap>

              {/* 출연자 */}
              <StyledHeding5>출연자</StyledHeding5>
              <StyledDetailCast>
                {cast.length
                  ? cast.map((item, index) => {
                      return (
                        <li key={item.credit_id}>
                          <div className="circle-wrap">
                            <img
                              src={
                                filterImages(item.profile_path)
                                  ? `https://image.tmdb.org/t/p/w100_and_h100_bestv2/${item.profile_path}`
                                  : '/images/no-image.png'
                              }
                              alt=""
                            />
                          </div>
                          <span>{item.name}</span>
                        </li>
                      );
                    })
                  : '등록된 출연자가 없습니다.'}
              </StyledDetailCast>

              {/* 추천영화 */}
              {similar.length !== 0 && (
                <>
                  <StyledHeding5>추천영화</StyledHeding5>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {similar.map(item => (
                        <div key={item.id} className="swiper-slide">
                          <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                            <a onClick={scrollToUp}>
                              <div className="thumb">
                                <img
                                  className="swiper-lazy"
                                  data-src={
                                    filterImages(item.poster_path)
                                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                                      : 'http://placehold.it/500x747?text=Not Found'
                                  }
                                  alt=""
                                />
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </StyledDetailContent>
          </StyledDetailLayout>
        </StyledLayout>
      </StyledDetailSection>
    </>
  );
}

export default Detail;
