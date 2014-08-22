'use strict';

var pubApp = angular.module('mean.pub');
pubApp.config(['$stateProvider',
    function ($stateProvider) {

        $stateProvider.state('pub example page', {
            url: '/pub/examples',
            templateUrl: 'pub/views/index.html'
        });
    }
]);
