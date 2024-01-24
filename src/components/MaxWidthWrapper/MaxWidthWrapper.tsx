"use client";
import React, { ReactNode } from 'react';
import { StyledContainer } from "./MaxWidthWrapper.theme";

interface MaxWidthWrapperProps {
  children: ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ children }) => {
  return (
    <StyledContainer
      maxWidth="xl"
      sx={{ width: '100%' }}
    >
      {children}
    </StyledContainer>
  );
};

export default MaxWidthWrapper;
