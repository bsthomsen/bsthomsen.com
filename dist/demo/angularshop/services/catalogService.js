'use strict';
angularShop.factory('catalogService', function () {
    var catalog = [
        { id: 0, name: 'Product 1', description: 'Product 1 description', price: '150' },
        { id: 1, name: 'Product 2', description: 'Product 2 description', price: '99.99' },
        { id: 2, name: 'Product 3', description: 'Product 3 description', price: '1991.99' }
    ];
    var catalogFactory = {};

    catalogFactory.getCatalog = function() {
        return catalog;
    };

    return catalogFactory;
});