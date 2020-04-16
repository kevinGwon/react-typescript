import React from 'react';
import StarRatings from 'react-star-ratings';

// Styled
import {
  StyledDetailHeader,
  StyledDetailHeaderInner,
  StyledDetailImg,
  StyledDetailStarRatings,
  StyledDetailInfo,
  StyledDetailDate,
  StyledDetailTitle,
  StyledDetailCategory,
} from './Detail.style';

function DetailHeader({
  API,
  filterImages,
}: {
  API: any;
  filterImages: (posterImage: string) => boolean;
}) {
  const { posterImage, average, date, title, genres } = API;
  return (
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
  );
}

export default DetailHeader;
