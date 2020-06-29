import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, priceMin: number): any {
    console.log(value)
    console.log(priceMin)
    //console.log(priceMax)
    return value
  }

}
