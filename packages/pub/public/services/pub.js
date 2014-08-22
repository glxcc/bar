'use strict';
var pubApp = angular.module("mean.pub");
pubApp.factory('Pub', [
    function () {
        return {
            name: 'pub',
            test: 'text'
        };
    }
]);

