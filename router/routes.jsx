import React from 'react';
import { BrowserRouter, Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../app/Components/Home.jsx';
import Main from '../app/Components/Main.jsx';
import About from '../app/Components/About.jsx';
import Contact from '../app/Components/Contact.jsx';

const routeNest = (
  <div>
    <Route path="/" component={Main} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    <Route />
  </div>
)

export default ({server, location, context, store}) => {
  let router;

  if(server) {
    router = (
      <StaticRouter location={location} context={context}>
        {routeNest}
      </StaticRouter>
    )
  } else {
    router = (
      <BrowserRouter>
        {routeNest}
      </BrowserRouter>
    )
  }

  return (
    <Provider store={store}>
      {router}
    </Provider>
  )
}