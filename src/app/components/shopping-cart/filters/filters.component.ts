import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filterPrice : number[] = []
  @Output() filterPriceOut = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
    if(!this.filterPrice[0]) this.filterPrice[0] = 0
    if(!this.filterPrice[1]) this.filterPrice[1] = 10000
    this.filterPriceOut.emit(this.filterPrice)
  }

  onSubmit() {
  }

}