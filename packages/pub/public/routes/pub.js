'use strict';

angular.module('mean.pub').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('pub example page', {
      url: '/pub/example',
      templateUrl: 'pub/views/index.html'
    });
  }
]);
