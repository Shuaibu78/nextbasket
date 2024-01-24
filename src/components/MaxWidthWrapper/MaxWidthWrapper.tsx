import { Container } from '@mui/material';
import React, { ReactNode } from 'react';
import Classes from "./maxWidthWrapper.module.css";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ className, children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ width: '100%' }}
      className={`${className}, ${Classes.container}`}
    >
      {children}
    </Container>
  );
};

export default MaxWidthWrapper;
