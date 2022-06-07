import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-bar">
    <h1 className="title">Math Magicians</h1>
    <ul className="list-items">
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/Calculator">
          Calculator
        </Link>
      </li>
      <li>
        <Link className="link" to="/Quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
