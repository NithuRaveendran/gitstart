const http = require('http');

const express = require('express');

const app2 = express();

app2.use((req,res,next) => {
    console.log('in the middleware!');

    next();
});
app2.use((req,res,next) => {
    console.log('in the middleware!');
    res.send('<h1> hello to node js </h1>'); 
   
    
});


const server = http.createServer(app2);
   
server.listen(3000);