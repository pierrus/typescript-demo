define(["require", "exports", "./orders-model"], function (require, exports, orders_model_1) {
    "use strict";
    var OrderService = (function () {
        function OrderService() {
            this._finalized = false;
            this.Init();
        }
        OrderService.prototype.Init = function () {
            this._order = new orders_model_1.Order();
            return this._order;
        };
        OrderService.prototype.Submit = function () {
            this._finalized = true;
            return true;
        };
        OrderService.prototype.Add = function (product) {
            if (this._finalized)
                return false;
            this._order.Add(product);
            var totalPrice = 0;
            this._order.Products.forEach(function (prod, idx, products) { totalPrice += prod.Quantity * prod.UnitPrice; });
            this._order.TotalPrice = totalPrice;
        };
        OrderService.prototype.GetOrder = function () {
            return this._order;
        };
        return OrderService;
    }());
    exports.OrderService = OrderService;
});
