const fs = require('fs');

const requestHandler=(req,res)=>{

    const url=req.url;
    const method=req.method;

if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Request Response</title></head>');
    res.write('<body><p id="output"></p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
    res.write('</html>')
    return res.end();
}
if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];

        fs.writeFile('message.txt', message, (error) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            
            return res.end();
        });
        
    });

}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Request Response</title></head>');
res.write('<body><h1>Welcome to my node js project</h1></body>');
res.write('</html>')
res.end();
}

// module.exports={handler:requestHandler,
// someText:"Some text"};

module.exports.handler=requestHandler;
module.exports.someText='Some hard coded text';

// module.handler=requestHandler;
// module.someText='Some hard coded text';