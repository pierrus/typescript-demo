import {Order, Product} from "./orders-model";

export interface IOrderService {
    Submit(): boolean;
    Init(): Order;
    Add(product: Product): Boolean;
    GetOrder(): Order;
}

export class OrderService implements IOrderService {

    private _order:Order;
    private _finalized:Boolean = false;

    public constructor () {
        this.Init();
    }

    public Init() {
        this._order = new Order();
        return this._order;
    }

    public Submit() {
        this._finalized = true;
        return true;
    }

    public Add(product: Product) {
        if (this._finalized)
            return false;

        this._order.Add(product);

        let totalPrice = 0;
        this._order.Products.forEach(function(prod, idx, products) { totalPrice += prod.Quantity * prod.UnitPrice  });

        this._order.TotalPrice = totalPrice;
    }

    public GetOrder(): Order {
        return this._order;
    }
}