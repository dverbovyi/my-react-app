import React from 'react'
import { Link } from 'react-router'
import './Button.css';

export const Button = () => (
  <div className="button">
    <Link to='/canvas'>
      <button>Open canvas</button>
    </Link>
  </div>
)
