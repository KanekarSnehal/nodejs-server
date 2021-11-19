const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    const url=req.url;
    if(url==='/home')
    {
        res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Request Response</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</html>')
    res.end();
    }
    else if(url==='/about')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Request Response</title></head>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>')
        res.end();
    }
    else if(url==='/node')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Request Response</title></head>');
        res.write('<body><h1>Welcome to my node js project</h1></body>');
        res.write('</html>')
        res.end();
    }
    
});

server.listen(4000);