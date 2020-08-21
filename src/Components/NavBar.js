import React from 'react';
import './NavBar.css';

export default function NavBar() {

  return (
    <>
      <span className="header">
        <span>
          <img className="logo" src={ require ('./images/logo.png') } /><h2 className="title underline">Brandon Harris</h2>
        </span>
        <nav>
        </nav>
      </span>
    </>
  );
}