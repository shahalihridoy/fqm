import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'car-list',
        pathMatch: 'full'
      },
      {
        path: 'car-list',
        loadChildren: './views/car-list/car-list.module#CarListModule'
      },
      {
        path: 'inspection-list',
        loadChildren: './views/inspection-list/inspection-list.module#InspectionListModule'
      }
    ]
  },
  {
    path: 'sessions',
    loadChildren: './views/sessions/sessions.module#SessionsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
