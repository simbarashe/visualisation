import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestsbypropertytype',
  templateUrl: './requestsbypropertytype.component.html',
  styleUrls: ['./requestsbypropertytype.component.scss']
})
export class RequestsbypropertytypeComponent implements OnInit {

  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;

constructor() {
  this.dataSource ={
    "chart": {
        "caption": "Requests by Property Type",
        "subcaption": "From 01-Jan-2016 To 12-Feb-2018",
        "startingangle": "120",
        "showlabels": "0",
        "showlegend": "1",
        "enablemultislicing": "0",
        "slicingdistance": "15",
        "showpercentvalues": "1",
        "showpercentintooltip": "0",
        "plottooltext": "Property Type : $label Total request : $datavalue",
        "theme": "ocean",
        "exportEnabled": "1",
        "exportMode": "client",
    },
    "data": [
        {
            "label": "Apartment/ Flat",
            "value": "61"
        },
        {
            "label": "House",
            "value": "67"
        },
        {
            "label": "Townhouse",
            "value": "25"
        }
    ]
}
 }

  ngOnInit() {
  }

}
