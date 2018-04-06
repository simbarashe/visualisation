import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;
  title = 'Angular4 FusionCharts Sample';

  constructor() {
    this.dataSource = {
      "chart": {
          "caption": "Harry's SuperMart",
          "subCaption": "Top 5 stores in last month by revenue",
          "numberprefix": "R",
          "theme": "zune",
          "exportEnabled": "1",
          "exportMode": "client",
      },
      "data": [
          {
              "label": "Bakersfield Central",
              "value": "880000"
          },
          {
              "label": "Garden Groove harbour",
              "value": "730000"
          },
          {
              "label": "Los Angeles Topanga",
              "value": "590000"
          },
          {
              "label": "Compton-Rancho Dom",
              "value": "520000"
          },
          {
              "label": "Daly City Serramonte",
              "value": "330000"
          }
      ]
  }
   }

  ngOnInit() {
  }

}
