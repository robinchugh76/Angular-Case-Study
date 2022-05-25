import { Component, OnInit } from '@angular/core';
import { ParentSubjectService } from '../parent-subject.service';

@Component({
  selector: 'app-subject-sibling1',
  templateUrl: './subject-sibling1.component.html',
  styleUrls: ['./subject-sibling1.component.css']
})
export class SubjectSibling1Component implements OnInit {

  countdown=0;
  constructor(private ParentSubjectService:ParentSubjectService) { }

  ngOnInit(): void {
    this.ParentSubjectService.dataSubject$.subscribe(response=> this.countdown=response.countdown)
  }

}
