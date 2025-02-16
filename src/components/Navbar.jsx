import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;