// components/Layout.js

import React from 'react';
import Dashboard from './Dashboard';
import FilmList from './FilmList';

const Layout = ({ children }) => {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Dashboard />
      <FilmList />
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
