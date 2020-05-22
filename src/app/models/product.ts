export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;

    constructor(id, name, description = '', price = 0,
    imgUrl = 'https://5.imimg.com/data5/BX/VE/MY-9324435/dorna-ac-drive-500x500.jpg') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }

}
