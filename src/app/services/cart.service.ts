import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    return this.http.patch(cartUrl + '/inc', {
      "_id": _id
    });
  }
  decProductInCart(_id: string): Observable<any> {
    return this.http.patch(cartUrl + '/dec', {
      "_id": _id
    });
  }
}
