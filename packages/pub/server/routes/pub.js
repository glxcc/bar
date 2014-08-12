'use strict';

// The Package is past automatically as first parameter
module.exports = function(Pub, app, auth, database) {

  app.get('/pub/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

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
};
