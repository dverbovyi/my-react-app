import React, { PropTypes } from 'react';

import './Popover.css';

export const Popover = ({text}) => (
    <div>
        <h2>{text}</h2>
    </div>
)

Popover.PropTypes = {
    text: PropTypes.string
}