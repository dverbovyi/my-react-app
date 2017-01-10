import getClientEnvironment from '../../config/env';

export const DEMO = {
    HOST: 'http:///d234468a.ngrok.io',
    PORT: '4000'
}

export const DEV = {
    HOST: 'http://localhost',
    PORT: '4000'
}

export const PROD = {
    HOST: 'https:///d234468a.ngrok.io',
    PORT: '4000'
}

const config = getClientEnvironment() === 'production' ? PROD : DEV;

export default config;