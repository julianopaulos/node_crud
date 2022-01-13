(async () => {
    const {Op} = require('sequelize');
    //const createDb = require('./Model/Conn/createDb');
    const database = require('./Model/Conn/dbconn');
    const Store = require('./Model/Tables/Store');
    const Insert = require('./Model/Insert');
    const findAll = require('./Model/FindAll');
    const Update = require('./Model/Update');
    const Delete = require('./Model/Delete');

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
            /*where:{
                description: {[Op.like]:'Monitor%'}
            }, */
            order:[['price', 'DESC']],
            limit: 2
        });
        console.log(products);




    }catch(err){
        console.log(err);
    }
})();