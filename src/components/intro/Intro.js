import React, { PropTypes } from 'react';
import { Button } from '../button';

import './Intro.css';

export const Intro = ({token, onClick}) => {
    const template = token ?
        <p>Open this link in your mobile phone
            <br />
            <a href={token}>{token}</a>
        </p>
        : <div>
            <p>To get started generate a session link</p>
            <Button text="Generate" onClick={onClick} />
        </div>

    return (
        <div className="App-intro">
            {template}
        </div>
    )
}

Intro.PropTypes = {
    token: PropTypes.string.isRequired
}