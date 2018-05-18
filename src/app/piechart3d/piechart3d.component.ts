import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart3d',
  templateUrl: './piechart3d.component.html',
  styleUrls: ['./piechart3d.component.scss']
})
export class Piechart3dComponent implements OnInit {

  width = 600;
    height = 400;
    type = 'pie3d';
    dataFormat = 'json';
    dataSource;

  constructor() {
    this.dataSource ={
      "chart": {
          "caption": "Age profile of website visitors",
          "subcaption": "Last Year",
          "startingangle": "120",
          "showlabels": "0",
          "showlegend": "1",
          "enablemultislicing": "0",
          "slicingdistance": "15",
          "showpercentvalues": "1",
          "showpercentintooltip": "0",
          "plottooltext": "Age group : $label Total visit : $datavalue ($percentvalues)",
          "theme": "ocean",
          "exportEnabled": "1",
          "exportMode": "client",
      },
      "data": [
          {
              "label": "Teenage",
              "value": "1250400"
          },
          {
              "label": "Adult",
              "value": "1463300"
          },
          {
              "label": "Mid-age",
              "value": "1050700"
          },
          {
              "label": "Senior",
              "value": "491000"
          }
      ]
  }
   }

  ngOnInit() {
  }

}
