/**
 * Created by Pierre on 16/11/2016.
 */
export class Order {
    public Products: Array<Product>;
    public TotalPrice: number;

    public constructor() {
        this.Products = new Array();
        this.TotalPrice = 0;
    }

    public Add(product: Product) {
        if (product.Quantity > 0 && product.UnitPrice > 0)
            this.Products.push(product);
    }
}

export class Product {
    public constructor(name: string, unitPrice: number, quantity: number) {
        this.Name = name;
        this.UnitPrice = unitPrice;
        this.Quantity = quantity;
    }

    public Name: string;
    public UnitPrice: number;
    public Quantity: number;
}