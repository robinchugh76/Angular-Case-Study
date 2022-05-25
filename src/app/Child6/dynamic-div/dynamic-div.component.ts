import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {

  arr = [1]

  constructor() { }

  ngOnInit(): void {
  }

  loadMore() {
    for (let i = 0; i < 4; i++) {
      this.arr.push(this.arr.length + 1)
    }
  }

  clickHandler(val:any) {
    alert(val)
  }

}
