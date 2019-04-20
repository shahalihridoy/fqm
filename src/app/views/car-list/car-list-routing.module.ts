import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {
    path: '',
    component: CarListComponent,
    data: {title: 'Car List'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarListRoutingModule { }
