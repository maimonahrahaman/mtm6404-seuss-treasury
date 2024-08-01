import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
