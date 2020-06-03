import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl)
    // .pipe(
    //   map((result : CartItem[]) => {
    //     let cartItems : CartItem[] = []
    //     for(let item of result) {
    //       let productExists = false;

    //       for(let i in cartItems) {
    //         if(cartItems[i].productId === item.productId) {
    //           cartItems[i].qty++
    //           productExists = true
    //           break;
    //         }
    //       }
    //       if(!productExists) {
    //         cartItems.push(item)
    //       }
    //     }
    //     return cartItems
    //   })
    // )
  }
  addProductToCart(product: Product): Observable<any> {
    let cartItem = new CartItem(product)
    let body = JSON.stringify(cartItem)
    return this.http.post(cartUrl, JSON.parse(body))
  }
  delProductFromCart(_id: string): Observable<any> {
    return this.http.delete(cartUrl + '/' + _id);
  }
  incProductInCart(_id: string): Observable<any> {
    return this.http.patch(cartUrl, {
      "action": "inc",
      "_id": _id
    });
  }
  decProductInCart(_id: string): Observable<any> {
    return this.http.patch(cartUrl, {
      "action": "dec",
      "_id": _id
    });
  }
}
