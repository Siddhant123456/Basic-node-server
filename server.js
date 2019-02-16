
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./admin');

const shopRoutes = require('./shop');


const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes.routes);
app.use(shopRoutes);

app.set('view engine' ,'pug');
app.set('views' , 'views');

// app.use((req,res,next) =>{
//     res.status(404).sendFile(path.join(__dirname,'404.html'));
// });
    
    app.listen(1000);


    