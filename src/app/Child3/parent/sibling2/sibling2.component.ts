import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  @Input() state:any;
  @Output() startPause = new EventEmitter();
  @Output() reset = new EventEmitter();

  timerform!:FormGroup;
  pause:boolean=false;

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.timerform=this.fb.group({
    timer:['',[Validators.required,Validators.min(1)]]
    })
  }

  startpausehandler(){
   if (!this.pause && this.state.countdown===0){
      this.startPause.emit({
        start:true,
        value:this.timerform.get('timer')?.value
      })
    }
    else{
      this.pause = !this.pause
      this.startPause.emit({
        start:!this.pause,
        value:this.timerform.get('timer')?.value
      })
    }

  }

  resethandler(){
    this.pause=true;
    this.timerform.get('timer')?.setValue(0);
    this.reset.emit();

  }
  

}
