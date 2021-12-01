
const path=require('path');

const express=require('express');
const router=express.Router();

const productsController=require('../controllers/products');


// const rootDir=require('../util/path');


// router.get('/',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','shop.html'));
// });

router.get('/',productsController.getProducts)

module.exports=router;