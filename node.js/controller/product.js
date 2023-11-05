const pdt = require('.../models/pdt');

exports.getAddProduct = (req,res,next) =>{
    res.render('add-product',{
    pageTitle:'add-product',
    path:'/admin/add-product',
    formsCSS:true,
    productCSS:true,
    activeAddProduct:true
    });
}

exports.postAddProduct = (req, res) => {
    const pdt = new pdt(req.body.title);
    pdt.save();
   res.redirect('/');
  };
  exports.getProduct = (req,res,next) =>{
    const product = pdt.fetchAll();
    res.render('shop',{
    prods:'product',
    pageTitle:'shop',
    path:'/',
    hasproduct:product.length>0,
    productCSS:true,
    activeProduct:true
    });
}