import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  constructor(private cartService: CartService, private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleDelFromCart() {
    this.cartService.delProductFromCart(this.cartItem._id).subscribe(data => {
      this.msg.sendMsg(this.cartItem)
      console.log(data)
    })
  }
  handleIncrease() {
    this.cartService.incProductInCart(this.cartItem._id).subscribe(data => {
      this.msg.sendMsg(this.cartItem)
      console.log(data)
    })
  }
  handleDecrease() {
    this.cartService.decProductInCart(this.cartItem._id).subscribe(data => {
      this.msg.sendMsg(this.cartItem)
      console.log(data)
    })
  }
}
