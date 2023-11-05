const path = require('path');
const express = require ('express');

const app3 = express();
const bodyParser = require('body-parser');
const errorController = require('./controller/error')

app3.set('view engine','ejs');
app3.set('views','views');


const adminRoutes = require('./routes/admin.js');
const shopRoutes= require('./routes/shop.js');


// Parse URL-encoded bodies
app3.use(bodyParser.urlencoded({ extended: false }));
app3.use(express.static(path.join(_dirname,'public')));

app3.use('/admin',adminRoutes);
app3.use(shopRoutes);

app3.use(errorController.get404);

app3.listen(3000);

