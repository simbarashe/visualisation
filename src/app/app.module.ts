import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Piechart3dComponent } from './piechart3d/piechart3d.component';
import { BarchartComponent } from './barchart/barchart.component';
import { AreaandlinechartComponent } from './areaandlinechart/areaandlinechart.component';
import { RuntimechartComponent } from './runtimechart/runtimechart.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);


@NgModule({
  declarations: [
    AppComponent,
    Piechart3dComponent,
    BarchartComponent,
    AreaandlinechartComponent,
    RuntimechartComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
