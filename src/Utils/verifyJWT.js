import jwt from 'jsonwebtoken';

export default function(req, res, next) {
    const verify_token = jwt.verify(req.headers.authorization, process.env.SECRET_KEY, (err) => {
        return err
    });

    if(Object(verify_token).hasOwnProperty('message')){
        return res.status(401).json(verify_token.message);
    }
    
    next();
};