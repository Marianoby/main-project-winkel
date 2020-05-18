var express = require('express');
var router = express.Router();
var Item = require('./../../models/item');

router.use(function (req, res, next) {
  if (req.decoded.type == "shop") {
    next();
  } else {
    res.status(404).send({ message: "Invalid privilage" });
  }
});

function generateItemID() {
  var userId = ""
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    userId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return userId;
}

//routes for shop here.....
router.post('/additem', async function (req, res, next) {
  let itemID = await generateItemID();
  var item = new Item({
    id: itemID,
    item_name: req.body.item_name,
    category: req.body.category,
    brand: req.body.brand,
    price: req.body.price,
    quantity: req.body.quantity,
    userID:req.decoded.user_id
  })
  item.save((err, data) => {
    if (err) {
      res.status(500).send({ message: "server error" });
    }
    else {
      res.status(200).json({ message: "product added" })
    }
  });
});

router.get('/productlist', async function (req, res, next) {
  console.log(req.query)
  let productlist = await item.find(req.decoded.user_id).exec()
  console.log(productlist)
  res.status(200).json({productlist})
});
module.exports = router;
