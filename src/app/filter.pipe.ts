import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  produkty : Product[] = []

  transform(value: Product[], ...args: any[]): any {    
    //if(args[0] == 0 || args[1] == 0) return value

    value.forEach(element => {
      if(element.price > args[0] && element.price < args[1]) {
        this.produkty.push(element)
      }
    });
    return this.produkty
  }
}
