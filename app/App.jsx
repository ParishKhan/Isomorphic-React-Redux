import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';


import Routes from '../router/routes.jsx';

const store = require('./store/configureStore').configure();


const render = Component => {
  ReactDOM.render(
    <Component store={store} />,
    document.getElementById('app')
  )
}

render(Routes);