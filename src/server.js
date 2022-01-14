const express = require('express');
const app = express();
const Find = require('./Controllers/Find');

app.get('/products', async (req, res) => {
    const products = await Find.allProducts(req.query);
    //console.log(req.query);
    res.send(products);
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