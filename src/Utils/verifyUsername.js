const Find = require('../Controllers/Find');

module.exports = async function(req, res, next){
    const username = await Find.user('username', req.body.username);
    if(username.length > 0){
        return res.status(400).json("username já utilizado por outro usuário");
    }
    next();
}