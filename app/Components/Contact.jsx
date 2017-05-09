import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Info from 'components/info';

const Contact = ({match}) => {
    return (
      <article>
        <h1>Contact</h1>
        <p>This is contact</p>

        <ul>
          <li>
            <Link to={`${match.url}/phone`}>Phone</Link>
          </li>
          <li>
            <Link to={`${match.url}/mail`}>Email</Link>
          </li>
          <li>
            <Link to={`${match.url}/skype`}>Skype</Link>
          </li>
        </ul>
        
        <div>
          <Route path={`${match.url}/:info`} component={Info} />
          <Route exact path={match.url} render={() => (
            <h3>Please select a contact type.</h3>
          )}/>
        </div>
      </article>
    );
}

export default Contact;