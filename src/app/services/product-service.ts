import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products: Product[] = [
        new Product(1, "Product 1", "Opis produktu", 100),
        new Product(2, "Product 2", "Opis produktu", 50),
        new Product(3, "Product 3", "Opis produktu", 130),
        new Product(4, "Product 4", "Opis produktu", 150),
        new Product(5, "Product 5", "Opis produktu", 190),
        new Product(6, "Product 6", "Opis produktu", 220),
        new Product(7, "Product 7", "Opis produktu", 290)
    ]

    constructor() { }

    getProducts(): Product[] {
        return this.products;
    }

}
