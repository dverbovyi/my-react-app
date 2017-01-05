'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

router.post('/api/tokens', controller.generateSession);
router.get('*', controller.notFound);

module.exports = router;