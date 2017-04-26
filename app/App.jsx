import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

const App = () => {
  return (
    <Layout>
        <Route path='/' component={Header} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Layout>
  );
};

export default App;