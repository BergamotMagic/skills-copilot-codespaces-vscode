// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a web server
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'comments.html');

  // Read the HTML file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
      return;
    }

    // Send the HTML file as a response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
