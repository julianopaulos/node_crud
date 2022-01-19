const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

//dentro do find está a função que cria todas as tabelas
const Find = require('./Controllers/Find');
const Insert = require('./Controllers/Insert');
const Delete = require('./Controllers/Delete');


app.use(bodyParser.json());

app.get('/stores', async (req, res) => {
    const products = await Find.allStores(req.query);
    res.send(products);
});

app.post('/store', async (req, res) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(100).required()
    });
    const body = schema.validate(req.body);
    
    if(body.error){
        res.status(400);
        res.send(JSON.stringify(body.error.details));
        
        return false;
    }

    res.send(JSON.stringify(await Insert.store(body.value)));
});

app.delete('/store', async (req, res) => {
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

app.get('/products', async (req, res) => {
    const products = await Find.allProducts(req.query);
    res.send(products);
});

app.post('/product', async (req, res) => {
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

app.delete('/product', async (req, res) => {
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

app.listen(3333);

/*(async () => {
    const {Op} = require('sequelize');
    //const createDb = require('./Model/Conn/createDb');
    const database = require('./Models/Conn/dbconn');
    const Store = require('./Models/Tables/Store');
    const Insert = require('./Models/Insert');
    const findAll = require('./Models/FindAll');
    const Update = require('./Models/Update');
    const Delete = require('./Models/Delete');

    try{
        //await createDb.create();
        await database.sync();
        
        //await Insert.store('Tec Minas Eletrônicos');
        //await Insert.store('Chipart Informática');

        let stores = await findAll.stores();
        console.log(stores);

        await Update.store(3, 'Atacarejo Eletrônicos');
        await Delete.store(5);

        stores = await findAll.stores();
        console.log(stores);

        await Insert.product('mouse', 100, 'Mouse USB 3200DPI', 1);
        await Insert.product('base', 80, 'Base refrigerada para notebook', 2);
        await Insert.product('base', 2200, 'Monitor Ultra Wide 4K', 1);
        await Insert.product('base', 250, 'Gabinete RGB Fusion', 2);

        let products = await findAll.products();
        console.log(products);
        
        //await Update.product(1, 'monitor', 250, 'Monitor Full HD');
        //await Delete.product(2);

        products = await findAll.products({
            include: Store,
            //where:{
              //  description: {[Op.like]:'Monitor%'}
            //}, 
            order:[['price', 'DESC']],
            limit: 2
        });
        console.log(products);




    }catch(err){
        console.log(err);
    }
})();*/