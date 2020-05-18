var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var User = require('./../../models/User');
var shop = require('./../../models/shop');

SALT_WORK_FACTOR = 10;

function generateUserID() {
  var userId = ""
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    userId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return userId;
}


router.post('/register', async function (req, res, next) {
  let salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
  let passwordhash = await bcrypt.hash(req.body.password, salt);
  let userID = await generateUserID();
  var person = new User({
    id: userID,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    username: req.body.username,
    password: passwordhash,
  })
  person.save((err, data) => {
    if (err) {
      res.status(500).json({ message: "server error" });
    }
    else {
      res.status(200).json({ message: "registered" })
    }
  });
});


router.post('/shopregister', async function (req, res, next) {
  let salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
  let passwordhash = await bcrypt.hash(req.body.password, salt);
  let userID = await generateUserID();
  var store = new shop({
    id: userID,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    type: req.body.type,
    username: req.body.username,
    password: passwordhash,
  })
  store.save((err, data) => {
    if (err) {
      res.status(500).json({ message: "server error" });
    }
    else {
      res.status(200).json({ message: "registered" })
    }
  });
});



module.exports = router;