import React, { Component } from 'react'
import { Header } from '../../components/header';
import './App.css';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children}
            </div>
        )
    }
}