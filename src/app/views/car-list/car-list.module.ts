import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListRoutingModule } from './car-list-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { MaterialModule } from '../../modules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [CarListComponent],
  imports: [
    CommonModule,
    CarListRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CarListModule { }
