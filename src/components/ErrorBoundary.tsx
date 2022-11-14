import React, { Component, PropsWithChildren, ReactElement } from 'react';

class ErrorBoundary extends Component<PropsWithChildren<{ fallbackRender: (props: { error: Error | null }) => ReactElement }>,
  { error: Error | null }> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log(error);
    return {
      error,
    };
  }

  render() {
    const { error } = this.state;
    const { children, fallbackRender } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}

export default ErrorBoundary;