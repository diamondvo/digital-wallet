import React from 'react';
import { StyledH1, StyleErrorContainer } from './ServiceError.style';

const ServiceError: React.FC = () => {
  return <StyleErrorContainer>
    <StyledH1>Something went wrong</StyledH1>
  </StyleErrorContainer>
}

export default ServiceError;