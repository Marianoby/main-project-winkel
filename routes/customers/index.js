var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    if (req.decoded.type == "customer") {
        next();
    } else {
        res.status(404).send({ message: "Invalid privilage"});
    }
});


//routes for customer here.....


module.exports = router;