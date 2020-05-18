var express = require('express');
var router = express.Router();

//Open APIs
router.use('/public', require('./public/index'));

//Login and Registration APIs
router.use('/login', require('./login/customer'));

//Restricted APIs
router.use(require('./tokenValidator'));
router.use('/customers', require('./customers/index'));
router.use('/shop', require('./shop/index'));

module.exports = router;
