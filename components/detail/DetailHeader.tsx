import React from 'react';

// Styled
import {
  StyledDetailHeader,
  StyledDetailHeaderInner,
  StyledDetailImg,
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
  const { posterImage, date, title, genres } = API;
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
