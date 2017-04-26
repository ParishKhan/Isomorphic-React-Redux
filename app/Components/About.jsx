import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This App is made by: {this.props.commentText}</p>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(About); 