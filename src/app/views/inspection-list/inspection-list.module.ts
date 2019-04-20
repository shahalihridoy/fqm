import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionListRoutingModule } from './inspection-list-routing.module';
import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';

@NgModule({
  declarations: [InspectionListComponent, InspectionDetailsComponent],
  imports: [
    CommonModule,
    InspectionListRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class InspectionListModule { }
