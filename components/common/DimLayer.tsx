import React, { ReactNode, useEffect } from 'react';

// Styled
import { StyledDimLayer } from './DimLayer.style';

function DimLayer({
  children,
  z,
  callback,
}: {
  children: ReactNode;
  z?: number;
  callback?: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  return (
    <StyledDimLayer onClick={callback} z={z}>
      {children}
    </StyledDimLayer>
  );
}

export default DimLayer;
