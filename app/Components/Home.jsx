import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMessage: ""
    }
  }
  _handleSubmit(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    dispatch(actions.addComment(this.refs.comment.value));
  }
  _handleChange(e) {
    e.preventDefault();
    this.setState({
      displayMessage: this.refs.comment.value
    })
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref="comment" onChange={this._handleChange.bind(this)} />
          <button>Submit</button>
        </form>
        <p ref="display">{this.state.displayMessage}</p>
      </div>
    );
  }
}

export default connect()(Home)