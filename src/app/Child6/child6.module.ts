import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DynamicDivComponent } from "./dynamic-div/dynamic-div.component";
import { DynamicDirective } from "./dynamic.directive";


const routes: Routes = [
    {
      path: '',
      component:DynamicDivComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  class Child6RoutingModule { }
  
  @NgModule({
    declarations: [DynamicDivComponent,DynamicDirective],
    imports: [
      CommonModule,
      Child6RoutingModule,
    ],
  })

  export class Child6Module { }