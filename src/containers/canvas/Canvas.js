import React, { Component } from 'react'
import { connect } from 'react-redux';
import io from 'socket.io-client';
import config from '../../consts/config';
import { SEND_TO_CLIENT, SEND_TO_SERVER } from '../../consts/actions';
import { establishConnection } from '../../actions'

const socket = io(`${config.HOST}:${config.PORT}`, { transports: ["websocket"] })

class Canvas extends Component {
  componentWillMount() {
    // this.props.establishConnection(this.props.token);
    socket.on(SEND_TO_CLIENT, function (data) {
      console.log(data);
    });

    window.ondevicemotion = (e) => {
      console.log(e);
      this.sendData(e);
    }
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

  sendData(e) {
    socket.emit(SEND_TO_SERVER, { data: e });
  }
}

const mapStateToProps = (state, ownProps) => ({
  token: ownProps.routeParams.token,
  isConnected: state.session.isConnected
});

export const CanvasPage = connect(mapStateToProps, {
  establishConnection
})(Canvas);
