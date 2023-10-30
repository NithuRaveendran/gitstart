// Import the required modules
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Log  name to the console
  console.log('NITHU');

  // Send a response to the client
  res.end('NITHU');
});

// Start the server on port 4000
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});

