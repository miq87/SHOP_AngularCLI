export class Product {
    _id: number
    name: string
    description: string
    price: number
    imgUrl: string

    constructor(_id, name, description = '', price = 0,
    imgUrl = 'https://5.imimg.com/data5/BX/VE/MY-9324435/dorna-ac-drive-500x500.jpg') {
        this._id = _id
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
    }

}
