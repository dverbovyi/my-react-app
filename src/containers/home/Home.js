import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/button';

class Home extends Component {

  render() {
    return (
      <div>
        <h2>Home Page</h2>  
        <p className="App-intro">
          To get started, click to generate a unique session link
        </p>
        <Button/>
      </div>
    )
  }
}

export const HomePage = connect()(Home)
