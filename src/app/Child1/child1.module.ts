import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BannerComponent } from "./banner/banner.component";


const routes: Routes = [
    {
      path: '',
      component: BannerComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  class Child1RoutingModule { }
  
  @NgModule({
    declarations: [BannerComponent],
    imports: [
      CommonModule,
      Child1RoutingModule,
    ],
  })

  export class Child1Module { }