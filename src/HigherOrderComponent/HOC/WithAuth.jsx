import React from "react";

export const WithAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isLoggedIn = props.isLoggedIn; 

    if (!isLoggedIn) {
      return <h2>Please login to access this page</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};
