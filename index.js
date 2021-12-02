
const path=require('path');


const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const errorController=require('./controllers/error');
const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop");

app.use(express.static(path.join(__dirname,'public'))); 


app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(4000);