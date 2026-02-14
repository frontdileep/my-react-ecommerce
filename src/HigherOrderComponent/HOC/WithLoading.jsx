import React from "react";

export const WithLoading = (WrappedComponent) => {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading products...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};
