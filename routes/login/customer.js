var express = require('express');
var router = express.Router();
var User = require('./../../models/User');
var shop = require('./../../models/shop');
var Admin = require('./../../models/Admin');
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

router.get('/login', async function (req, res, next) {
  console.log(req.query)
  let user = await User.findOne({ username: req.query.username }).exec()
  if (user) {
    let passwordHashFromDatabase = user.password
    let isMatch = await bcrypt.compare(req.query.password, passwordHashFromDatabase);
    console.log("User : Customer");
    if (isMatch) {
      const jwtUser = {
        "user_id": user.id,
        "type": "customer",
        "username": user.username,
      }
      const token = jwt.sign(jwtUser, config.secret, { expiresIn: config.tokenLife })
      var user_data = {
        id:user.id,
        name:user.name,
        email:user.email,
        username:user.username,
        token:token,
        type:"customer"
      }
      res.status(200).json( user_data )
      console.log("Password Match");
    } else {
      console.log("Password Mismatch");
      res.status(400).json({ message: "Incorrect Password", userdata: {} })
    }
  }
  else {
    let Shop = await shop.findOne({ username: req.query.username }).exec()
    if (Shop) {
      let passwordFromDatabase = Shop.password;
      let isMatch = await bcrypt.compare(req.query.password, passwordFromDatabase);
      console.log("User : Store");
      if (isMatch) {
        const jwtshop = {
          "user_id": Shop.id,
          "type": "shop",
          "username": Shop.username,
        }
        const token = jwt.sign(jwtshop, config.secret, { expiresIn: config.tokenLife })
        var user_data = {
          id:Shop.id,
          name:Shop.name,
          email:Shop.email,
          username:Shop.username,
          token:token,
          type:"shop"
        }
        res.status(200).json( user_data )
        console.log("Password Match");
      }
      else {
        console.log("Password Mismatch");
        res.status(400).json({ message: "Incorrect Password", userdata: {} })
      }
    } else {
      ////////////////////////////////////////////
      let admin = await Admin.findOne({ username: req.query.username }).exec()
      if (admin) {
        let passwordFromDatabase = admin.password;
        let isMatch = await bcrypt.compare(req.query.password, passwordFromDatabase);
        console.log("User : Store");
        if (isMatch) {
          const jwtshop = {
            "user_id": admin.id,
            "type": "admin",
            "username": admin.username,
          }
          const token = await jwt.sign(jwtshop, config.secret, { expiresIn: config.tokenLife })
          var user_data = {
            id:admin.id,
            name:admin.name,
            email:admin.email,
            username:admin.username,
            token:token,
            type:"admin"
          }
          res.status(200).json( user_data )
          console.log("Password Match");
        }
        else {
          console.log("Password Mismatch");
          res.status(400).json({ message: "Incorrect Password", userdata: {} })
        }
      } else {
        console.log("User : Not Found");
        res.status(400).json({ message: "Username not registered", userdata: {} })
      }
      ///////////////////////////////////////////////
    }
  }
});
module.exports = router;  