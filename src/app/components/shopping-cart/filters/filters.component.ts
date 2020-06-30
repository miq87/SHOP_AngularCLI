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
  }

  onSubmit() {
    this.filterPriceOut.emit(this.filterPrice)
  }

}