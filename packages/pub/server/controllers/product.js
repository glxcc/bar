/**
 * Created by xuejiaowang on 13/08/2014.
 */

'use strict';

var mongoose = require('mongoose');
var Product = mongoose.model('Product');
// var _ = require('lodash');


/**
 * Create product
 * @param req
 * @param res
 */
exports.createProduct = function (req, res) {
    var product = new Product(req.body);
    product.save(function (err) {
        if (err) {
            return res.json(500, {
                error: 'can not create product'
            });
        }
        res.json(product);
    });
};

/**
 * update product
 * @param req
 * @param res
 */
exports.updateProduct = function (req, res) {
    var product = req.product;
    product = _.extend(product, req.body);
    product.save(function (err) {
        if (err) {
            return res.json(500, {
                error: 'can not update product'
            });
        }
        res.json(product);
    });
};

/**
 * delete product
 * @param req
 * @param res
 */
exports.deleteProduct = function(req, res){
    var product = req.product;
    product.remove(function(err){
        if(err){
            return res.json(500, {
                error:'can not delete product'
            })
        }
        res.json(product);
    });
}

/**
 * find all product
 * @param req
 * @param res
 */
exports.productList = function (req, res) {
    Product.find().sort('name').exec(function (err, products) {
        if(err){
            res.json(500, {
                error:'can not find product'
            });
        }
        res.json(products);
    });

};


