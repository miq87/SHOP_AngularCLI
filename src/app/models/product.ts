export class Product {
    _id: string
    name: string
    desc: string
    price: number
    imgUrl: string

    constructor(_id, name, desc = '', price = 0, imgUrl = '') {
        this._id = _id
        this.name = name
        this.desc = desc
        this.price = price
        this.imgUrl = imgUrl
    }
}
