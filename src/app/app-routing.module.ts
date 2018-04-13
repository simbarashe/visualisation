import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarchartComponent } from './barchart/barchart.component';
import { Piechart3dComponent } from './piechart3d/piechart3d.component';
import { AreaandlinechartComponent } from './areaandlinechart/areaandlinechart.component';
import { RuntimechartComponent } from './runtimechart/runtimechart.component';
import { MapchartComponent } from './mapchart/mapchart.component';
import { RequestsbypropertytypeComponent } from './requestsbypropertytype/requestsbypropertytype.component';
import { RequestsbyremovaltypeComponent } from './requestsbyremovaltype/requestsbyremovaltype.component';
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
  },
  {
    path: 'dynamic',
    component: RuntimechartComponent
  },
  {
    path: 'map',
    component: MapchartComponent
  },
  {
    path: 'requestsbypropertytype',
    component: RequestsbypropertytypeComponent
  },
  {
    path: 'requestsbyremovaltype',
    component: RequestsbyremovaltypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
