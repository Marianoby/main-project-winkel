module.exports = (req, res, next) => {
    var token = req.headers['authorization']
    console.log(req.headers['authorization'])
    if(token==undefined|null|""){
      return res.status(403).send({ message:  'No token provided'});
    }
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    } else {
      return res.status(403).send({ message: 'Invalid Token structure'});
    }
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized access.' });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({ message: 'No token provided.'});
    }
  }