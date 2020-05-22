import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger-service';
import { Product } from 'src/app/models/product';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [
  ];
  cartTotal = 0
  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }
  addProductToCart(product: Product) {

    let productExists = false;

    for(let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id) {
        productExists = true
        this.cartItems[i].qty++
        break;
      }
      else productExists = false
    }
    if(!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.qty)
    });
  }
}
