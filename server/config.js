'use strict';

const config = {};

process.env.NODE_PORT = process.env.NODE_PORT || 8080;
process.env.NODE_TEST_PORT = process.env.NODE_TEST_PORT || 8081; 

config.PORT = process.env.NODE_ENV === 'test' ? process.env.NODE_TEST_PORT : process.env.NODE_PORT;

module.exports = config;