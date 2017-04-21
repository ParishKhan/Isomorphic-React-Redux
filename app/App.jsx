import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

module.exports = (
  <Layout>
        <Route path='/' component={Header} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
  </Layout>
)