'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

router.get('/api/tokens', controller.generateSession); //TMP
router.post('/api/tokens', controller.generateSession);
router.get('*', controller.notFound);

module.exports = router;