import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListRoutingModule } from './car-list-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { MaterialModule } from '../../shared/modules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@NgModule({
  declarations: [
    CarListComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    CarListRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CarListModule { }
