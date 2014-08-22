'use strict';

angular.module('mean.pub').controller('PubController', ['$scope', 'Global', 'Pub',
  function($scope, Global, Pub) {
      console.log(Pub);
    $scope.global = Global;
    $scope.package = {
      name: 'pub',
        bla:Pub
    };
  }
]);
