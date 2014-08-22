'use strict';

var pubApp = angular.module('mean.pub');
pubApp.controller('ProductController', ['$scope', 'Global', 'Products',
    function ($scope, Global, Products) {
        $scope.global = Global;
        $scope.productJson =
            [
                {title: 'noodle 1', description: 'noodle test 1', category: 'cat1', price: 100},
                {title: 'noodle 2', description: 'noodle test 2', category: 'cat1', price: 200},
                {title: 'noodle 3', description: 'noodle test 3', category: 'cat2', price: 300},
                {title: 'noodle 4', description: 'noodle test 4', category: 'cat2', price: 400}
            ]
        console.log("ppppppppppppppppppppppppppppppppppppppppp" + Products.toString());
        $scope.productlist = Products;
    }
]);

pubApp.controller('CreateProductController', [ '$scope',
    function ($scope) {
    }
])
