const path = require('path');
const express = require ('express');


const adminRoutes = require('./routes/admin.js');
const shopRoutes= require('./routes/shop.js');


// Parse URL-encoded bodies
app3.use(bodyParser.urlencoded({ extended: false }));

app3.use('/admin',adminRoutes);
app3.use(shopRoutes);

app3.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'../','views','404.html'));

  });


app3.listen(3000);

