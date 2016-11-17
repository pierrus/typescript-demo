/**
 * Created by Pierre on 16/11/2016.
 */
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
define(["require", "exports", "./orders-model", "./orders-service"], function (require, exports, orders_model_1, orders_service_1) {
    "use strict";
    $(document).ready(function () {
        var orderService = new orders_service_1.OrderService();
        var p = new orders_model_1.Product("Macbook PRO", 3200, 3);
        var p2 = new orders_model_1.Product("NIKE Air Force 1", 130, 1);
        orderService.Add(p);
        orderService.Add(p2);
        orderService.Submit();
        alert('Order submitted. Total price: ' + orderService.GetOrder().TotalPrice);
    });
});
