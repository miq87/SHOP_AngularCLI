export class Product {
    _id: number
    name: string
    description: string
    price: number
    imgUrl: string

    constructor(_id, name, description = '', price = 0, imgUrl = '') {
        this._id = _id
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
    }

}
