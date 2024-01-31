// withAuthentication.tsx
import React, { useEffect } from 'react';

interface AuthHOCProps {
  user: any
}

const withAuthentication = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P & AuthHOCProps> = (props) => {

    useEffect(() => { 
      // You can perform any additional authentication logic here
      // For example, check if the user has a valid token

      // Simulated logic for demonstration purposes
      const isAuthenticated = ( props.user === null ? false:true);
      if (!isAuthenticated) {
        // Redirect to the login page if not authenticated
        window.location.href = '/login';
      }
    }, []);

    return <WrappedComponent {...props as P} />;
  };

  return AuthenticatedComponent;
};

export default withAuthentication;
