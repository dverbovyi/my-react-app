'use strict';

const http = require('http'),
    app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config'),
    router = require('./router'),
    CONSTS = require('./consts');

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use('/', router);

server.listen(config.PORT, config.IP, () => {
    console.log(`Listening on ${config.IP}:${config.PORT}`);
});

io.on('connection', function (socket) {
    socket.on(CONSTS.SEND_TO_SERVER, function (data) {
        console.log(data);

        socket.emit(CONSTS.SEND_TO_CLIENT, data)
    });
});

module.exports = app;