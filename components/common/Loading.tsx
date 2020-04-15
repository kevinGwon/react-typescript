import React from 'react';
import { useSelector } from 'react-redux';

// Componets
import DimLayer from './DimLayer';

// Styled
import { StyledLoading } from './Loading.style';

function Loading() {
  const { loading: commonLoading } = useSelector(store => store.common);
  const { loading: userLoading } = useSelector(store => store.user);

  return (
    <>
      {(commonLoading || userLoading) && (
        <DimLayer z={120}>
          <StyledLoading>
            <span></span>
          </StyledLoading>
        </DimLayer>
      )}
    </>
  );
}

export default Loading;
