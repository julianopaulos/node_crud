require('dotenv/config');
const express = require('express');
const jwt = require('jsonwebtoken');
const { Joi, celebrate, Segments } = require('celebrate');

const verifyJwt = require('./Utils/verifyJWT');
const verifyUsername = require('./Utils/verifyUsername');

const Find = require('./Controllers/Find');
const Insert = require('./Controllers/Insert');
const Delete = require('./Controllers/Delete');
const Update = require('./Controllers/Update');

const routes = express.Router();


//============================================================================USER
routes.post('/user', 
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().min(3).max(200).required(),
            username: Joi.string().min(3).max(100).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(100).required()
        })
    }),
    verifyUsername,
    async (req, res) => {
        res.json(await Insert.user(req.body));
    }
);



//============================================================================AUTH

routes.post('/auth', 
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().min(3).max(100).required(),
            password: Joi.string().min(8).max(100).required()
        })
    }),
    async (req, res) => {
        const token = jwt.sign({ id: 1 }, process.env.SECRET_KEY, {
            expiresIn: 6000 //sec
        });
        return res.json({'token': token});
    }
);



//============================================================================STORES

routes.get('/stores', celebrate({
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        const stores = await Find.allStores(req.query);
        res.json(stores);
    }
);


routes.post('/store', 
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().min(3).max(100).required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        res.json(await Insert.store(req.body));
    }
);


routes.delete('/store', 
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.number().min(1).required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        res.json(await Delete.store(req.body));
    }
);


routes.put('/store', 
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.number().min(1).required(),
            name: Joi.string().min(3).max(100).required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        res.json(await Update.store(req.body));
    }
);



//============================================================================PRODUCTS

routes.get('/products', celebrate({
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        const products = await Find.allProducts(req.query);
        res.json(products);
    }
);


routes.post('/product', celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().min(3).max(100).required(),
            price: Joi.number().min(0).required(),
            description: Joi.string().min(3).max(250).required(),
            storeId: Joi.number().min(1).required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        res.json(await Insert.product(req.body));
    }
);


routes.delete('/product', celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.number().min(1).required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        res.json(await Delete.product(req.body));
    }
);


routes.put('/product', celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.number().min(1).required(),
            name: Joi.string().min(3).max(100).required(),
            price: Joi.number().min(0).required(),
            description: Joi.string().min(3).max(250).required(),
            storeId: Joi.number().min(1).required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }),
    verifyJwt,
    async (req, res) => {
        res.json(await Update.product(req.body));
    }
);

module.exports = routes;