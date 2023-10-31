
const fs = require('fs');
const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
} else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log('parsedBody>>>>>', parsedBody);
        fs.writeFile('message.txt', message, (err) => {
            if (err) {
                console.log('Error writing file:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.write('Error writing file');
                return res.end();
            }
            console.log('File written successfully');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    });
} else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From My Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
}
};

//module.exports={
   // handler:requestHandler,
   // someText:'Some hard coded text'
//};
exports.handler=requestHandler;
exports.someText='Some hard coded text';