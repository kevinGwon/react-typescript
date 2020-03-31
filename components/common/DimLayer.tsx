import React, { ReactNode, useEffect } from 'react';
import { StyledDimLayer } from './DimLayer.style';

function DimLayer({ children, z }: { children: ReactNode; z?: number }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  return <StyledDimLayer z={z}>{children}</StyledDimLayer>;
}

export default DimLayer;
