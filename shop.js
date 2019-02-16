const express = require('express');
const path = require('path');
const routes = express.Router();

const admin = require('./admin');

routes.get( '/' , (req,res,next) =>{
    const products = admin.adminData;
    res.render('shop' , {prods : products , ShopTitle : 'SHOP'});
});

module.exports = routes;

