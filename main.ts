/**
 * Created by Pierre on 16/11/2016.
 */
/// <reference path="node_modules/@types/jquery/index.d.ts" />

import {Product} from "./orders-model";
import {OrderService, IOrderService} from "./orders-service";

$(document).ready(function() {
    let s: string = 'Hello';

    let orderService: IOrderService = new OrderService();


    let p:Product = new Product("Macbook PRO", 3200, 3);
    let p2:Product = new Product("NIKE Air Force 1", 130, 1);

    orderService.Add(p);
    orderService.Add(p2);

    orderService.Submit();

    alert ('Order submitted. Total price: ' + orderService.GetOrder().TotalPrice);
});