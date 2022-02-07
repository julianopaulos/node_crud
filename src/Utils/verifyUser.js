const bcrypt = require('bcryptjs');

const Find = require('../Controllers/Find');

const validations = {
    async username(req, res, next){
        const username = await Find.user('username', req.body.username);
        if(username.length > 0){
            return res.status(401).json("username já utilizado por outro usuário");
        }
        next();
    },
    async auth(req, res, next){
        const user = await Find.user('username', req.body.username);
        if(user.length === 0){
            return res.status(404).json("Usuário não encontrado");
        }

        const verifiedPassword = bcrypt.compareSync(req.body.password, user[0].password);

        if(!verifiedPassword){
            return res.status(401).json("Credenciais inválidas");
        }

        next();
    }
};

module.exports = validations;