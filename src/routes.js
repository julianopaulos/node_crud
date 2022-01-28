const express = require('express');
const jwt = require('jsonwebtoken');
const { Joi, celebrate, Segments } = require('celebrate');

//dentro do find está a função que cria todas as tabelas
const Find = require('./Controllers/Find');
const Insert = require('./Controllers/Insert');
const Delete = require('./Controllers/Delete');
const Update = require('./Controllers/Update');

const routes = express.Router();


routes.get('/stores', async (req, res) => {
    const products = await Find.allStores(req.query);
    res.send(products);
});


routes.post('/store', 
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().min(3).max(100).required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).options({ allowUnknown: true })
    }), 
    async (req, res) => {
        res.send(JSON.stringify(await Insert.store(req.body)));
    }
);


routes.delete('/store', async (req, res) => {
    const schema = Joi.object().keys({
        id: Joi.number().min(1).required()
    });

    const body = schema.validate(req.body);
    
    if(body.error){
        res.status(400);
        res.send(JSON.stringify(body.error.details));
        
        return false;
    }

    res.send(JSON.stringify(await Delete.store(body.value)));
});


routes.put('/store', async (req, res) => {
    const schema = Joi.object().keys({
        id: Joi.number().min(1).required(),
        name: Joi.string().min(3).max(100).required()
    });

    const body = schema.validate(req.body);
    
    if(body.error){
        res.status(400);
        res.send(JSON.stringify(body.error.details));
        
        return false;
    }

    res.send(JSON.stringify(await Update.store(body.value)));
});



routes.get('/products', async (req, res) => {
    const products = await Find.allProducts(req.query);
    res.send(products);
});


routes.post('/product', async (req, res) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(100).required(),
        price: Joi.number().min(0).required(),
        description: Joi.string().min(3).max(250).required(),
        storeId: Joi.number().min(1).required()
    });
    const body = schema.validate(req.body);
    
    if(body.error){
        res.status(400);
        res.send(JSON.stringify(body.error.details));
        
        return false;
    }

    res.send(JSON.stringify(await Insert.product(body.value)));

});


routes.delete('/product', async (req, res) => {
    const schema = Joi.object().keys({
        id: Joi.number().min(1).required()
    });

    const body = schema.validate(req.body);
    
    if(body.error){
        res.status(400);
        res.send(JSON.stringify(body.error.details));
        
        return false;
    }

    res.send(JSON.stringify(await Delete.product(body.value)));
});


routes.put('/product', async (req, res) => {
    const schema = Joi.object().keys({
        id: Joi.number().min(1).required(),
        name: Joi.string().min(3).max(100).required(),
        price: Joi.number().min(0).required(),
        description: Joi.string().min(3).max(250).required(),
        storeId: Joi.number().min(1).required()
    });

    const body = schema.validate(req.body);
    
    if(body.error){
        res.status(400);
        res.send(JSON.stringify(body.error.details));
        
        return false;
    }

    res.send(JSON.stringify(await Update.product(body.value)));

});

module.exports = routes;