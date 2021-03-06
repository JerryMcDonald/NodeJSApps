
const products = [];

exports.getAddProduct = (req, res, next) => {
    // the default res header is text/html
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });

exports.postAddProduct = (req, res, next) => {
      products.push({title: req.body.title})
      res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  // console.log('shop.js', adminData.products);
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  });