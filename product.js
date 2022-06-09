const Sequelize = require('sequelize');
const express = require('express');

/**
 * Crate a table Product name
 */
const Product = sequelize.define('product', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    }
});


/** 
 * Insert the data from product table
 */


Product.create({
     name:'TV',
     description: 'This is sumsung tv' 
    }
);
Product.create({
    name:'Phone apple',
    description: 'This is apple i phone' 
   }
);
Product.create({
    name:'watch',
    description: 'watch is best watching time ' 
   }
);
Product.create({
    name:'shoes',
    description: 'this is nike shoe' 
   }
);


