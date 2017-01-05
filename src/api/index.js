import { API_CONFIG } from '../consts/config';

const baseUrl = `${API_CONFIG.HOST}/api`;

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