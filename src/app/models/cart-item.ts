import { Product } from './product'

export class CartItem {
    productId: number
    productName: string
    price: number
    qty: number
    
    constructor(product: Product, qty = 1) {
        this.productId = product._id
        this.productName = product.name
        this.price = product.price
        this.qty = qty
    }
}