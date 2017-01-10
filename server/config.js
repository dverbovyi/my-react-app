'use strict';

const config = {
    IP: '0.0.0.0'
};

process.env.NODE_PORT = process.env.NODE_PORT || 4000;
process.env.NODE_TEST_PORT = process.env.NODE_TEST_PORT || 4001;

config.PORT = process.env.NODE_ENV === 'test' ? process.env.NODE_TEST_PORT : process.env.NODE_PORT;

module.exports = config;