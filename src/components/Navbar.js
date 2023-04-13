import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/missions', text: 'Missions' },
  { path: '/profile', text: 'My Profile' },
];

export default function Navbar() {
  const [active, setActive] = useState('');

  const handleNavLinkClick = (linkText) => {
    setActive(linkText);
  };

  return (
    <nav>
      <div className="my-logo">
        <img className="logo-image" src={planet} alt="logo" />
        <h1 className="logo">Space Traveler&apos;s Hub</h1>
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              exact
              to={link.path}
              className={active === link.text ? 'active-link' : ''}
              onClick={() => handleNavLinkClick(link.text)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
