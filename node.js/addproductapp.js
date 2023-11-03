const express = require('express');
const bodyParser = require('body-parser');

const addproductapp = express();

// Parse URL-encoded bodies
addproductapp.use(bodyParser.urlencoded({ extended: false }));

addproductapp.use('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <input type="text" name="title" /><button type="submit">Add product</button></form>
  `);
});

addproductapp.post('/add-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

addproductapp.use('/', (req, res) => {
  res.send('<h1>Hello from express</h1>');
});

addproductapp.listen(3000);

