const product = [];

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
    console.log(req.body);
    res.redirect('/');
  };
  exports.Product = (req,res,next) =>{
    res.render('shop',{
    prods:'product',
    pageTitle:'shop',
    path:'/',
    hasproduct:product.length>0,
    productCSS:true,
    activeProduct:true
    });
}