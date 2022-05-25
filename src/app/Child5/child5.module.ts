import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DynamicDataComponent } from "./dynamic-data/dynamic-data.component";


const routes: Routes = [
    {
      path: '',
      component:DynamicDataComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  class Child5RoutingModule { }
  
  @NgModule({
    declarations: [DynamicDataComponent],
    imports: [
      CommonModule,
      Child5RoutingModule,
    ],
  })

  export class Child5Module { }