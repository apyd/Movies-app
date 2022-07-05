import React, { ReactNode } from "react";

export class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <p>Something went wrong, we are working on it</p>
    ) : (
      this.props.children
    );
  }
}
