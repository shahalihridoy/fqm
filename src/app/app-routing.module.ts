import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/car-list/car-list.module#CarListModule',
    data: {title: 'Car List'}
  },
  {
    path: 'car-list',
    loadChildren: './views/car-list/car-list.module#CarListModule',
    data: {title: 'Car List'}
  },
  {
    path: 'inspection-list',
    loadChildren: './views/inspection-list/inspection-list.module#InspectionListModule',
    data: {title: 'Inspection List'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
