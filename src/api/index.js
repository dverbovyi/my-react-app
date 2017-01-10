import config from '../consts/config';

const baseUrl = `${config.HOST}:${config.PORT}/api`;

export const API = {
    generateToken,
    connect
}

function generateToken() {
    return fetch(`${baseUrl}/tokens`, {
        method: 'POST'
    })
        .then(res => res.json())
}

function connect(token) {
    //connect to sockets API will be
    console.log(token)
    const headers = new Headers({
        'X-SESSION-TOKEN': token
    });

    return fetch(`${baseUrl}/connect`, {
        method: 'POST',
        headers
    })
        .then(res => res.json())
}