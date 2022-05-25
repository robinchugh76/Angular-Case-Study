import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  items: Array<{ id: number; price: number }> = [];
  isGrid = true;
  pricefilter='Choose a drink';

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 40; i++) {
      this.items.push({ id: i + 1, price: i + 1 });
    }
  }

  switchGridListView() {
    this.isGrid = !this.isGrid;
  }

  priceChange() {
    const isDesc = this.pricefilter === '1' ? 1 : -1;
    this.items.sort((a, b) => (a.price - b.price) * isDesc);
  }
}
