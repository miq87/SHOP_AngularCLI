import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cartItems = []
  cartTotal = 0

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.loadCardItems()
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
