import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateToken } from '../../actions'
import { Intro } from '../../components/intro';

class Home extends Component {
  onButtonClick() {
    this.props.generateToken();
  }
  render() {
    const { token } = this.props;

    return (
      <div>
        <h2>Welcome</h2>
        <div className="App-intro">
          <Intro token={token} onClick={this.onButtonClick.bind(this)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  token: state.session.token,
  isFetching: state.session.isFetching
});

export const HomePage = connect(mapStateToProps, {
  generateToken
})(Home);
