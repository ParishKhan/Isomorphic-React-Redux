import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

class App extends Component {
  render() {
    return (
      <Layout>
          <Route path='/' component={Header} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
      </Layout>
    );
  }
};

export default withRouter(connect()(App));