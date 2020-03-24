import React, { ReactNode } from 'react';
import { StyledDimLayer } from './DimLayer.style';

function DimLayer({ children }: { children: ReactNode }) {
  return <StyledDimLayer>{children}</StyledDimLayer>;
}

export default DimLayer;
