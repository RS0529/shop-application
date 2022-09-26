const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    // editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const id  = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product( id, title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};


exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("admin/edit-product", {
      product: product,
      pageTitle: "Edit Product",
      path: "/admin/edit/product",
    });
  });
};

// exports.postEditProduct = (req, res, next) => {
//   const updateProduct = new Product(
//     req.body.id,
//     req.body.title,
//     req.body.imageUrl,
//     req.body.price,
//     req.body.description
//   );
//   updateProduct.update();
//   res.redirect('/');
// };

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};








// exports.getEditProduct = (req, res, next) => {
//   const prodId = req.params.productId;
//   Product.findById(prodId, (product) => {
//     res.render("/admin/edit-product", {
//       pageTitle: "Edit Product",
//       path: "/admin/edit-product",
//       editing: true,
//       product: product,
//     });
//   });
// };

// exports.getEditProduct = (req, res, next) => {
//   const products = Product.findById(req.params.prodId);
//    res.render("admin/edit-product", {
//     product: products,
//     path: "/admin/edit/product",
//     pageTitle: "Edit Product",

//   });
// };
