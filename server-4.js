const http = require('http')
const url = require('url')
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/'){
    fs.readFile('./index.html', function(err, data) {

      res.write(data);
      res.end()
      console.log(data.toString());
    });
    
  } else if (req.url === '/page2.html') {
    fs.readFile('./page2.html', function(err, data) {
        res.write(data)      
        res.end()

        console.log(data.toString());
      });
          
  } else {
    res.write('page not found')
    res.end()
  }
})

server.listen(port, () => {
  console.log(`listening on port ${port}`)
})