import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InspectionListComponent,
    data: {title: 'Inspection List'}
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: InspectionDetailsComponent,
    data: {title: 'Inspection Details'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionListRoutingModule { }
