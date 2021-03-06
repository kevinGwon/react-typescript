import React from 'react';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';

// Styled
import {
  StyledDetailContent,
  StyledDetailParagrap,
  StyledDetailCast,
  StyledDetailStarRatings,
} from './Detail.style';
import { StyledHeding5 } from '../../styled/global/StyledHeading.style';

function DetailContents({
  API,
  scrollToUp,
  filterImages,
}: {
  API: any;
  scrollToUp: () => void;
  filterImages: (posterImage: string) => boolean;
}) {
  const { overview, cast, similar, average } = API;
  return (
    <StyledDetailContent>
      {/* 평점 */}
      <StyledHeding5>평점({`${average / 2}/5`})</StyledHeding5>
      <StyledDetailStarRatings>
        <StarRatings
          rating={average / 2}
          numberOfStars={5}
          starDimension="25px"
          starSpacing="2px"
          starRatedColor="#e50914"
          starEmptyColor="#999999"
          name="rating"
        />
      </StyledDetailStarRatings>

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
      <StyledHeding5>추천영화</StyledHeding5>
      {similar.length ? (
        <>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {similar.map(item => (
                <div key={item.id} className="swiper-slide">
                  <Link href={`/detail?id=${item.id}`}>
                    <a onClick={scrollToUp}>
                      <div className="thumb">
                        <img
                          className="swiper-lazy"
                          data-src={
                            filterImages(item.poster_path)
                              ? `https://image.tmdb.org/t/p/w500/${item.poster_path.replace(
                                  /\//g,
                                  '',
                                )}`
                              : 'http://placehold.it/500x747?text=Not Found'
                          }
                          alt=""
                          // http://localhost:3000/detail/270946
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
      ) : (
        '추천영화가 없습니다.'
      )}
    </StyledDetailContent>
  );
}

export default DetailContents;
