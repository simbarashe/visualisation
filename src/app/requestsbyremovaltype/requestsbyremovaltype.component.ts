import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestsbyremovaltype',
  templateUrl: './requestsbyremovaltype.component.html',
  styleUrls: ['./requestsbyremovaltype.component.scss']
})
export class RequestsbyremovaltypeComponent implements OnInit {

  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;

constructor() {
  this.dataSource ={
    "chart": {
        "caption": "Requests by Removal Type",
        "subcaption": "From 01-Jan-2016 To 12-Feb-2018",
        "startingangle": "120",
        "showlabels": "0",
        "showlegend": "1",
        "enablemultislicing": "0",
        "slicingdistance": "15",
        "showpercentvalues": "1",
        "showpercentintooltip": "0",
        "plottooltext": "Removal Type : $label Total request : $datavalue",
        "theme": "ocean",
        "exportEnabled": "1",
        "exportMode": "client",
    },
    "data": [
        {
            "label": "Office",
            "value": "5"
        },
        {
            "label": "Residential",
            "value": "148"
        }
    ]
}
 }

  ngOnInit() {
  }

}
