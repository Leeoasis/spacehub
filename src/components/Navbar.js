import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/missions', text: 'Missions' },
  { path: '/profile', text: 'My Profile' },
];

export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">Space Traveler&apos;s Hub</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              exact
              to={link.path}
              activeClassName="nav-link-active"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
