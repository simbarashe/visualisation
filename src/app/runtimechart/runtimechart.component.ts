import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runtimechart',
  templateUrl: './runtimechart.component.html',
  styleUrls: ['./runtimechart.component.scss']
})
export class RuntimechartComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource ;
  constructor() {
    this.dataSource = {
      "chart": {
          "caption": "Monthly revenue for last year",
          "subCaption": "Harry's SuperMart",
          "xAxisName": "Month",
          "yAxisName": "Revenue (In USD)",
          "numberPrefix": "$",
          "theme": "zune",
          "exportEnabled": "1",
          "exportMode": "client",
      },
      "data": [
          {
              "label": "Jan",
              "value": "420000"
          },
          {
              "label": "Feb",
              "value": "810000"
          },
          {
              "label": "Mar",
              "value": "720000"
          },
          {
              "label": "Apr",
              "value": "550000"
          },
          {
              "label": "May",
              "value": "910000"
          },
          {
              "label": "Jun",
              "value": "510000"
          },
          {
              "label": "Jul",
              "value": "680000"
          },
          {
              "label": "Aug",
              "value": "620000"
          },
          {
              "label": "Sep",
              "value": "610000"
          },
          {
              "label": "Oct",
              "value": "490000"
          },
          {
              "label": "Nov",
              "value": "900000"
          },
          {
              "label": "Dec",
              "value": "730000"
          }
      ]
  }
   }

  ngOnInit() {
  }

}
