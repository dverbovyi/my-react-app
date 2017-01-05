import React, { Component } from 'react'
import { connect } from 'react-redux';
import { establishConnection } from '../../actions'

class Canvas extends Component {
  componentWillMount() {
    this.props.establishConnection(this.props.token);
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

const mapStateToProps = (state, ownProps) => ({
  token: ownProps.routeParams.token,
  isConnected: state.session.isConnected
});

export const CanvasPage = connect(mapStateToProps, {
  establishConnection
})(Canvas);
