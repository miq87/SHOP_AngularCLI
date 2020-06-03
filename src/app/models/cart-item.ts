import { Product } from './product'

export class CartItem {
    _id: string
    productName: string
    price: number
    qty: number
    
    constructor(product: Product) {
        this._id = product._id
        this.productName = product.name
        this.price = product.price
        this.qty = 1
    }
}