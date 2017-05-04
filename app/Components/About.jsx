import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';

class About extends Component {
  render() {
    return (
      <article>
        <h1>About</h1>
        <p>I Bear Witness That There Is No God But Allah And Muhammad (sm) Is The Messenger Of Allah: "{this.props.commentText}"</p>
      </article>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(About); 