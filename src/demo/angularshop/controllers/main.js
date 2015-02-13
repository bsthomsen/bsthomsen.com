'use strict';
angularShop.controller('MainController', function ($scope, catalogService) {
    $scope.catalog = [];
    
    init();
    function init() {
        $scope.catalog = catalogService.getCatalog();
    }
    
    $scope.cart = [];

    $scope.addToCart = function (item) {
        var i;
        for (i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].product === item) {
                $scope.changeQuantity($scope.cart[i], 1);
                return;
            }
        }

        $scope.cart.push({
            product: item,
            quantity: 1
        });
    };

    $scope.removeFromCart = function (cartItem) {
        var i = $scope.cart.indexOf(cartItem);
        $scope.cart.splice(i, 1);
    };

    $scope.changeQuantity = function (cartItem, value) {
        var i = $scope.cart.indexOf(cartItem);
        $scope.cart[i].quantity += value;
        
        if ($scope.cart[i].quantity == 0)
            $scope.removeFromCart(cartItem);
    };
    
    $scope.getCartCount = function () {
        var count = 0;
        $scope.cart.forEach(function (item) {
            count += item.quantity;
        });
        return count;
    };
});