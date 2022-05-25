import { Component, OnInit } from '@angular/core';
import { ParentSubjectService } from '../parent-subject.service';

@Component({
  selector: 'app-subject-sibling3',
  templateUrl: './subject-sibling3.component.html',
  styleUrls: ['./subject-sibling3.component.css']
})
export class SubjectSibling3Component implements OnInit {

  timelogs: { start: boolean,  countdown: number, time: Date}[]=[]

  constructor( private ParentSubjectService:ParentSubjectService) { }

  ngOnInit(): void {

    this.ParentSubjectService.dataSubject$.subscribe((response)=>{
      this.timelogs=response.timelogs

    })
    
  }

}
