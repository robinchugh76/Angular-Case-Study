import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-1',
    loadChildren: () =>
      import('./Child1/child1.module').then((m) => m.Child1Module),
  },
  {
    path: 'route-2',
    loadChildren: () =>
      import('./Child2/child2.module').then((m) => m.Child2Module),
  },
  {
    path: 'route-3',
    loadChildren: () =>
      import('./Child3/child3.module').then((m) => m.Child3Module),
  },
  {
    path: 'route-4',
    loadChildren: () =>
      import('./Child4/child4.module').then((m) => m.Child4Module),
  },
  {
    path: 'route-5',
    loadChildren: () =>
      import('./Child5/child5.module').then((m) => m.Child5Module),
  },
  {
    path: 'route-6',
    loadChildren: () =>
      import('./Child6/child6.module').then((m) => m.Child6Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
