import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionListRoutingModule } from './inspection-list-routing.module';
import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [InspectionListComponent],
  imports: [
    CommonModule,
    InspectionListRoutingModule,
    MaterialModule
  ]
})
export class InspectionListModule { }
