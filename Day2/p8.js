const http = require('http');
const fs = require('fs/promises');
const filePath = 'data.json';

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.url === '/setdata' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      const user = JSON.parse(body);
      try {
        const data = await fs.readFile(filePath, 'utf8');
        const users = JSON.parse(data);
        users.push(user);
        await fs.writeFile(filePath, JSON.stringify(users));
        res.end('Data received');
      } catch (error) {
        if (error.code === 'ENOENT') {
          await fs.writeFile(filePath, JSON.stringify([user]));
          res.end('Data received');
        } else {
          console.error(error);
          res.end('Error saving data');
        }
      }
    });
  } else if (req.url === '/getdata' && req.method === 'GET') {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      res.end(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.end('No data available');
      } else {
        console.error(error);
        res.end('Error reading data');
      }
    }
  } else {
    res.end('Not Found');
  }
});

server.listen(9000, () => {
  console.log('Server running on port 9000');
});
