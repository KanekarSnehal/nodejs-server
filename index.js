// const http = require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log("this always runs");
    // res.send('<h1>hello</h1>');
    next();
})

app.use('/add-product',(req,res,next)=>{
    console.log("in middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
})
app.get('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    console.log("in middleware");
    res.send('<h1>hello</h1>');
    
})

// const server=http.createServer(app);

app.listen(4000);