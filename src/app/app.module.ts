import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as USAMap from 'fusioncharts/maps/fusioncharts.usa';
import * as SAMap from 'fusioncharts/maps/fusioncharts.southafrica';
import * as OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Piechart3dComponent } from './piechart3d/piechart3d.component';
import { BarchartComponent } from './barchart/barchart.component';
import { AreaandlinechartComponent } from './areaandlinechart/areaandlinechart.component';
import { RuntimechartComponent } from './runtimechart/runtimechart.component';
import { MapchartComponent } from './mapchart/mapchart.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionMaps, USAMap,SAMap, FintTheme, OceanTheme);


@NgModule({
  declarations: [
    AppComponent,
    Piechart3dComponent,
    BarchartComponent,
    AreaandlinechartComponent,
    RuntimechartComponent,
    MapchartComponent
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