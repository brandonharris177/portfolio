import React from 'react';
import css from './NavBar.css'

export default function Header() {

  return (
    <>
      <span className="header">
        <span>
          <img className="logo" src={ require ('./images/logo.png') } /><h2 className="title underline">Brandon Harris</h2>
        </span>
        <nav>
            <h3>Nav Bar here</h3>
            <h3>second item</h3>
        </nav>
      </span>
    </>
  );
}