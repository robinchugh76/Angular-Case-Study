import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  @Input() state:any;
  constructor() { }

  ngOnInit(): void {
  }

}
