import React, { Component, PropTypes } from 'react';

const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-inverse bg-inverse">
      <a className="navbar-brand" href="#">{title}</a>
    </nav>
  );
}

export default Header;
