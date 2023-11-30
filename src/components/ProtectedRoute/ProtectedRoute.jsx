import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ element, isLoggedIn }) {
  const { pathname } = useLocation();

  return (isLoggedIn ? element : <Navigate to='/' replace state={{ path: pathname }} />);
}

export default ProtectedRoute;
