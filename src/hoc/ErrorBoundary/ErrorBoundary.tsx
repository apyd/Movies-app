import React from 'react';
import { IErrorProps } from './ErrorBoundary.types';

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = { hasError: false, error: { name: '', message: '' } };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div>
          <p>Something went wrong, we are working on it</p>
          {error?.message && <span>Error: {error?.message}</span>}
        </div>
      );
    }
    return this.props.children;
  }
}
