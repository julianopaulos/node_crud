import 'dotenv/config';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { Joi, celebrate, Segments } from 'celebrate';

import verifyJwt from './Utils/verifyJWT.js';
import verifyUser from './Utils/verifyUser.js';

import Find from './Controllers/Find.js';
import Insert from './Controllers/Insert.js';
import Delete from './Controllers/Delete.js';
import Update from './Controllers/Update.js';

const routes = Router();


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
    verifyUser.username,
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
    verifyUser.auth,
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
        }).options({ allowUnknown: true }),
        [Segments.QUERY]: Joi.object().keys({
            id: Joi.number(),
            name: Joi.string().min(3).max(100),
            limit: Joi.number(),
            like: Joi.boolean(),
            order: Joi.string(),
            ascending: Joi.boolean()
        })
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
        }).options({ allowUnknown: true }),
        [Segments.QUERY]: Joi.object().keys({
            id: Joi.number(),
            description: Joi.string().min(3).max(100),
            price: Joi.number(),
            priceOperator: Joi.string().min(1).max(2).regex(/[<>=]/),
            like: Joi.boolean(),
            order: Joi.string(),
            ascending: Joi.boolean(),
            limit: Joi.number()
        })
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

export default routes;