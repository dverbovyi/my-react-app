import React from 'react'
import { Link } from 'react-router'
import logo from '../../../assets/logo.svg';
import './Header.css';

export const Header = () => (
  <div className="App-header">
    <Link to='/'>
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
    <h2>Welcome to React</h2>
  </div>
)
