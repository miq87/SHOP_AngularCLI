import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  produkty : Product[]

  transform(value: Product[], ...args: any[]): any {
    this.produkty = []  
    if(args[0] == null) args[0] = 0
    if(args[1] == null) args[1] = 10000

    value.forEach(element => {
      if(element.price > args[0] && element.price < args[1]) {
        this.produkty.push(element)
      }
    })
    return this.produkty
  }
}
