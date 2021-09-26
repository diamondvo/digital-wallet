import { Component } from 'react';
import {  ComponentProps, ComponentState } from 'src/view/components/ErrorBoundary/ErrorBoundary.types';
import ServiceError from 'src/view/pages/ServiceError/ServiceError';

class ErrorBoundary extends Component<ComponentProps, ComponentState> {
  public state: ComponentState = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error) {
    console.error(error);
  }

  public render() {
    if (this.state.hasError) {
      return <ServiceError />
    }
    return this.props.children;
  }
}

export default ErrorBoundary;