import React, { ReactNode } from "react";

interface IErrorState {
  hasError: boolean
}

interface Props {
  fallback: ReactNode;
}

export class ErrorBoundary extends React.Component<Props, IErrorState> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}