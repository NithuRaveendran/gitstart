const http = require('http');

const requestHandler = (req, res) => {
    const url = req.url;

    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome home</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to About Us page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/node') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to my Node.js project</title></head>');
        res.write('<body><h1>Welcome to my Node.js project</h1></body>');
        res.write('</html>');
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Page Not Found</title></head>');
        res.write('<body><h1>404 - Page Not Found</h1></body>');
        res.write('</html>');
        res.end();
    }
};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
