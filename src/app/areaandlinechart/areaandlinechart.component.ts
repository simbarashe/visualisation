import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areaandlinechart',
  templateUrl: './areaandlinechart.component.html',
  styleUrls: ['./areaandlinechart.component.scss']
})
export class AreaandlinechartComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'mscombi2d';
  dataFormat = 'json';
  dataSource;

  constructor() {
    this.dataSource = {
      "chart": {
          "caption": "Actual Revenues, Targeted Revenues & Profits",
          "subcaption": "Last year",
          "xaxisname": "Month",
          "yaxisname": "Amount (In USD)",
          "numberprefix": "$",
          "theme": "ocean",
          "exportEnabled": "1",
          "exportMode": "client",
      },
      "categories": [
          {
              "category": [
                  {
                      "label": "Jan"
                  },
                  {
                      "label": "Feb"
                  },
                  {
                      "label": "Mar"
                  },
                  {
                      "label": "Apr"
                  },
                  {
                      "label": "May"
                  },
                  {
                      "label": "Jun"
                  },
                  {
                      "label": "Jul"
                  },
                  {
                      "label": "Aug"
                  },
                  {
                      "label": "Sep"
                  },
                  {
                      "label": "Oct"
                  },
                  {
                      "label": "Nov"
                  },
                  {
                      "label": "Dec"
                  }
              ]
          }
      ],
      "dataset": [
          {
              "seriesname": "Actual Revenue",
              "data": [
                  {
                      "value": "16000"
                  },
                  {
                      "value": "20000"
                  },
                  {
                      "value": "18000"
                  },
                  {
                      "value": "19000"
                  },
                  {
                      "value": "15000"
                  },
                  {
                      "value": "21000"
                  },
                  {
                      "value": "16000"
                  },
                  {
                      "value": "20000"
                  },
                  {
                      "value": "17000"
                  },
                  {
                      "value": "25000"
                  },
                  {
                      "value": "19000"
                  },
                  {
                      "value": "23000"
                  }
              ]
          },
          {
              "seriesname": "Projected Revenue",
              "renderas": "line",
              "showvalues": "0",
              "data": [
                  {
                      "value": "15000"
                  },
                  {
                      "value": "16000"
                  },
                  {
                      "value": "17000"
                  },
                  {
                      "value": "18000"
                  },
                  {
                      "value": "19000"
                  },
                  {
                      "value": "19000"
                  },
                  {
                      "value": "19000"
                  },
                  {
                      "value": "19000"
                  },
                  {
                      "value": "20000"
                  },
                  {
                      "value": "21000"
                  },
                  {
                      "value": "22000"
                  },
                  {
                      "value": "23000"
                  }
              ]
          },
          {
              "seriesname": "Profit",
              "renderas": "area",
              "showvalues": "0",
              "data": [
                  {
                      "value": "4000"
                  },
                  {
                      "value": "5000"
                  },
                  {
                      "value": "3000"
                  },
                  {
                      "value": "4000"
                  },
                  {
                      "value": "1000"
                  },
                  {
                      "value": "7000"
                  },
                  {
                      "value": "1000"
                  },
                  {
                      "value": "4000"
                  },
                  {
                      "value": "1000"
                  },
                  {
                      "value": "8000"
                  },
                  {
                      "value": "2000"
                  },
                  {
                      "value": "7000"
                  }
              ]
          }
      ]
  };
   }

  ngOnInit() {
  }

}
