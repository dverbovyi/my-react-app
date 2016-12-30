import React, { Component } from 'react'
import { connect } from 'react-redux';

class Canvas extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
      <div>
        <h2>Canvas Page</h2>
        <p className="App-intro">
          Here the drawing canvas will be
        </p>
      </div>
    )
  }
}

export const CanvasPage = connect()(Canvas);
