import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from 'Layout';
import Home from 'components/Home';
import Header from 'components/Header';
import About from 'components/About';
import Contact from 'components/Contact';

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