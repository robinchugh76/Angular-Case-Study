import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ParentSubjectComponent } from "./parent-subject/parent-subject.component";
import { SubjectSibling1Component } from "./parent-subject/subject-sibling1/subject-sibling1.component";
import { SubjectSibling2Component } from "./parent-subject/subject-sibling2/subject-sibling2.component";
import { SubjectSibling3Component } from "./parent-subject/subject-sibling3/subject-sibling3.component";
import { SubjectSibling4Component } from "./parent-subject/subject-sibling4/subject-sibling4.component";


const routes: Routes = [
    {
      path: '',
      component:ParentSubjectComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  class Child4RoutingModule { }
  
  @NgModule({
    declarations: [ParentSubjectComponent,
        SubjectSibling1Component,
        SubjectSibling2Component,
        SubjectSibling3Component,
        SubjectSibling4Component],
    imports: [
      CommonModule,
      Child4RoutingModule,
      FormsModule,
      ReactiveFormsModule
      
    ],
  })

  export class Child4Module { }