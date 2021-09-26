import { ReactNode } from 'react';

export interface ComponentProps {
  children: ReactNode
}

export interface ComponentState {
  hasError: boolean;
  error: Error;
}