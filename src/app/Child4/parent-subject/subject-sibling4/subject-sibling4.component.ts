import { Component, OnInit } from '@angular/core';
import { ParentSubjectService } from '../parent-subject.service';

@Component({
  selector: 'app-subject-sibling4',
  templateUrl: './subject-sibling4.component.html',
  styleUrls: ['./subject-sibling4.component.css']
})
export class SubjectSibling4Component implements OnInit {

  timelogs: { start: boolean,  countdown: number, time: Date}[]=[];
  started:any;

  constructor(private ParentSubjectService:ParentSubjectService) { }

  ngOnInit(): void {
    this.ParentSubjectService.dataSubject$.subscribe((response)=>{
      this.timelogs=response.timelogs

    })
  }

  checkcount() {

    this.started= this.timelogs.reduce((total:number,current:any)=>{
      if(current.start){
        return total+=1
      }
      return total
    },0)
    return this.started
  }

}
