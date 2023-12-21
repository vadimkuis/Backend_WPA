const ProductModel = require('../models/products');

class ProductController {
    static async getProducts(req, res) {
        const products = await ProductModel.findAll();
        res.render('products', {
            title: 'products',
            products: products
        });
    }
}

module.exports = ProductController;