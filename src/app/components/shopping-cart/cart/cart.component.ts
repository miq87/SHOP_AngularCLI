import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0
  
  constructor(private msg: MessengerService, private cart: CartService) { }

  ngOnInit(): void {
    this.handleSubscription()
    this.loadCardItems()
  }
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCardItems()
    })
  }
  loadCardItems() {
    this.cart.getCartItems().subscribe((items : CartItem[]) => {
      this.cartItems = items
      this.calcCartTotal()
    })
  }
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.qty)
    })
  }
}
