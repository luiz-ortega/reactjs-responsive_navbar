import React from 'react';
import './styles.css';

function NavBar({ items }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {items.map((item) => (
          <li>
            {item.label} {item.icon}
          </li>
        ))}
      </ul>
      <h1>Navbar</h1>
    </nav>
  );
}

export default NavBar;
