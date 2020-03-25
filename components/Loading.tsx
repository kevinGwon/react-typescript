import React from 'react';
import { useSelector } from 'react-redux';
import { StyledLoading } from './common/Loading.style';
import DimLayer from './common/DimLayer';

function Loading() {
  const { loading: commonLoading } = useSelector(store => store.common);
  const { loading: userLoading } = useSelector(store => store.user);

  return (
    <>
      {commonLoading ||
        (userLoading && (
          <DimLayer>
            <StyledLoading>
              <span></span>
            </StyledLoading>
          </DimLayer>
        ))}
    </>
  );
}

export default Loading;
