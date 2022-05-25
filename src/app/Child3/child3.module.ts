import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { Sibling1Component } from "./parent/sibling1/sibling1.component";
import { Sibling2Component } from "./parent/sibling2/sibling2.component";
import { Sibling3Component } from "./parent/sibling3/sibling3.component";
import { Sibling4Component } from "./parent/sibling4/sibling4.component";


const routes: Routes = [
    {
      path: '',
      component:ParentComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  class Child3RoutingModule { }
  
  @NgModule({
    declarations: [ParentComponent,
        Sibling1Component,
        Sibling2Component,
        Sibling3Component,
        Sibling4Component],
    imports: [
      CommonModule,
      Child3RoutingModule,
      FormsModule,
      ReactiveFormsModule
      
    ],
  })

  export class Child3Module { }