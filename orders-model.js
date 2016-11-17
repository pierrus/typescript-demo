define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Created by Pierre on 16/11/2016.
     */
    var Order = (function () {
        function Order() {
            this.Products = new Array();
            this.TotalPrice = 0;
        }
        Order.prototype.Add = function (product) {
            if (product.Quantity > 0 && product.UnitPrice > 0)
                this.Products.push(product);
        };
        return Order;
    }());
    exports.Order = Order;
    var Product = (function () {
        function Product(name, unitPrice, quantity) {
            this.Name = name;
            this.UnitPrice = unitPrice;
            this.Quantity = quantity;
        }
        return Product;
    }());
    exports.Product = Product;
});
