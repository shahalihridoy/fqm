import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionListComponent } from './inspection-list/inspection-list.component';

const routes: Routes = [
  {
    path: '',
    component: InspectionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionListRoutingModule { }
