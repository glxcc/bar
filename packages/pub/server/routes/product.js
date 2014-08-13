'use strict';

var product = require('../controllers/product');

// The Package is past automatically as first parameter
module.exports = function(Product, app, auth, database) {
/*

    var hasAuthorization = function(req, res, next) {
        if (!req.user.isAdmin) {
            return res.send(401, 'User is not authorized');
        }
        next();
    };
*/
    app.get('/pub/product/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    /**
     * get: get all products;
     * post: create product;
     */
    app.route('/pub/product')
        .get(product.productList)
        .post(auth.requiresLogin, product.createProduct);


/*


  app.get('/pub/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/pub/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/pub/example/render', function(req, res, next) {
    Pub.render('index', {
      package: 'pub'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
*/

};
