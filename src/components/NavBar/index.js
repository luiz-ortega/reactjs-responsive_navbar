import React from 'react';
import './styles.css';

function NavBar({ items }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {items.map((item) => (
          <li class="nav-item">
            <div className="nav-link">
              <span className="icon"> {item.icon}</span>{' '}
              <span className="link-text"> {item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
