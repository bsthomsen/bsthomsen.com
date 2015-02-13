'use strict';
angularShop.factory('cartService', function () {
    var cart = [];
    var cartFactory = {};

    cartFactory.getCart = function () {
        return cart;
    };
    
    cartFactory.AddItemToCart = function(item) {
        cart.push(item);
    };

    return cartFactory;
});