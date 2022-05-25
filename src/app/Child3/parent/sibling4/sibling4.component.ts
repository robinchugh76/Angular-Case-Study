import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling4',
  templateUrl: './sibling4.component.html',
  styleUrls: ['./sibling4.component.css'],
})
export class Sibling4Component implements OnInit {
  @Input() state: any;
  started:any;
  constructor() {}

  ngOnInit(): void {}

  checkcount() {

    this.started= this.state.timelogs.reduce((total:number,current:any)=>{
      if(current.start){
        return total+=1
      }
      return total
    },0)
    return this.started
  }
}
