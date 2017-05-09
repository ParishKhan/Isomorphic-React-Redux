import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {
  render() {
    var contactType = this.props.match.params.info
    return (
      <div>
        <h3>Contact Type List</h3>
        {this.props.info[contactType]}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(Info);