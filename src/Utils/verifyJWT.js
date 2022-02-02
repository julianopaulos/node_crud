const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const verify_token = jwt.verify(req.headers.authorization, process.env.SECRET_KEY, (err) => {return err});
    if(Object(verify_token).hasOwnProperty('message'))return res.status(400).json(verify_token.message);
    next();
};