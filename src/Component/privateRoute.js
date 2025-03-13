import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
