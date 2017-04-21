import React, { Component } from 'react';
import Header from './Header.jsx';

const Main = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Main;
