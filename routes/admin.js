const path=require('path');

const express=require('express');
const router=express.Router();

const rootDir=require('../util/path')

const productsController=require('../controllers/products');


// router.get('/add-product',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','add-product.html'));
// });

router.get('/add-product',productsController.getAddProduct);


router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
});


// router.post('/shop',(req,res,next)=>{
//     res.redirect('/');
// });

router.post('/add-product',productsController.postAddProduct);

module.exports=router;