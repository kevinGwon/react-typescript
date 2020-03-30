import React, { ReactNode, useEffect } from 'react';
import { StyledDimLayer } from './DimLayer.style';

function DimLayer({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  return <StyledDimLayer>{children}</StyledDimLayer>;
}

export default DimLayer;
