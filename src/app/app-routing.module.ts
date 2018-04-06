import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarchartComponent } from './barchart/barchart.component';
import { Piechart3dComponent } from './piechart3d/piechart3d.component';
import { AreaandlinechartComponent } from './areaandlinechart/areaandlinechart.component';
const routes: Routes = [
  {
    path: '',
    component: BarchartComponent
  },
  {
    path: 'piechart3d',
    component: Piechart3dComponent
  },
  {
    path: 'areaandline',
    component: AreaandlinechartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
