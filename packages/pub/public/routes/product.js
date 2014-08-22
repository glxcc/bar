/**
 * Created by nlg on 22/08/2014.
 */

'use strict';

var pubApp = angular.module('mean.pub');
pubApp.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.
            state('product list', {
                url: '/pub/products',
                templateUrl: 'pub/views/product.html'
            })

    }
]);