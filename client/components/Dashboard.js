// components/Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <nav className="bg-dark text-white w-25 py-3">
      <div className="px-4 text-xl font-weight-bold">Navigation</div>
      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <Link href="/films" className="nav-link px-4 py-2 text-white">Films</Link>
        </li>
        <li className="nav-item">
          <Link href="/home" className="nav-link px-4 py-2 text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/authors" className="nav-link px-4 py-2 text-white">Authors</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
