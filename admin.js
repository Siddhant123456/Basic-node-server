const express = require('express');
const path = require('path');


const routes  = express.Router();

const adminData = [];

routes.get('/product' , (req,res,next) =>{
    res.render('add-product',{Title: 'Add-product'});  
});
routes.post('/product-id' , (req,res,next) =>{
    adminData.push({title : req.body.title});
    res.redirect('/');
});
exports.routes = routes;

exports.adminData = adminData;
