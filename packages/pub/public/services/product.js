'use strict';
var pubApp = angular.module("mean.pub");

pubApp.factory('Products', function ($http) {

/*    return [
        {title: 'product 1', description: 'product test 1', category: 'productCat1', price: 101110},
    ]*/

    return {
        productList: function (callback) {
            $http.get("json.js").success(callback);
            console.log(callback)
        }
    }
});
