import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapchart',
  templateUrl: './mapchart.component.html',
  styleUrls: ['./mapchart.component.scss']
})
export class MapchartComponent implements OnInit {

  width = 600;
    height = 400;
    type = 'maps/southafrica';
    dataFormat = 'json';
    dataSource;

  constructor() {
    /* 
    this.dataSource ={
      "chart": {
          "caption": "Annual Sales by State",
          "subcaption": "Last year",
          "entityFillHoverColor": "#cccccc",
          "numberScaleValue": "1,1000,1000",
          "numberScaleUnit": "K,M,B",
          "numberPrefix": "$",
          "showLabels": "1",
          "theme": "ocean"
      },
      "colorrange": {
          "minvalue": "0",
          "startlabel": "Low",
          "endlabel": "High",
          "code": "#e44a00",
          "gradient": "1",
          "color": [
              {
                  "maxvalue": "56580",
                  "displayvalue": "Average",
                  "code": "#f8bd19"
              },
              {
                  "maxvalue": "100000",
                  "code": "#6baa01"
              }
          ]
      },
      "data": [
          {
              "id": "HI",
              "value": "3189"
          },
          {
              "id": "DC",
              "value": "2879"
          },
          {
              "id": "MD",
              "value": "920"
          },
          {
              "id": "DE",
              "value": "4607"
          },
          {
              "id": "RI",
              "value": "4890"
          },
          {
              "id": "WA",
              "value": "34927"
          },
          {
              "id": "OR",
              "value": "65798"
          },
          {
              "id": "CA",
              "value": "61861"
          },
          {
              "id": "AK",
              "value": "58911"
          },
          {
              "id": "ID",
              "value": "42662"
          },
          {
              "id": "NV",
              "value": "78041"
          },
          {
              "id": "AZ",
              "value": "41558"
          },
          {
              "id": "MT",
              "value": "62942"
          },
          {
              "id": "WY",
              "value": "78834"
          },
          {
              "id": "UT",
              "value": "50512"
          },
          {
              "id": "CO",
              "value": "73026"
          },
          {
              "id": "NM",
              "value": "78865"
          },
          {
              "id": "ND",
              "value": "50554"
          },
          {
              "id": "SD",
              "value": "35922"
          },
          {
              "id": "NE",
              "value": "43736"
          },
          {
              "id": "KS",
              "value": "32681"
          },
          {
              "id": "OK",
              "value": "79038"
          },
          {
              "id": "TX",
              "value": "75425"
          },
          {
              "id": "MN",
              "value": "43485"
          },
          {
              "id": "IA",
              "value": "46515"
          },
          {
              "id": "MO",
              "value": "63715"
          },
          {
              "id": "AR",
              "value": "34497"
          },
          {
              "id": "LA",
              "value": "70706"
          },
          {
              "id": "WI",
              "value": "42382"
          },
          {
              "id": "IL",
              "value": "73202"
          },
          {
              "id": "KY",
              "value": "79118"
          },
          {
              "id": "TN",
              "value": "44657"
          },
          {
              "id": "MS",
              "value": "66205"
          },
          {
              "id": "AL",
              "value": "75873"
          },
          {
              "id": "GA",
              "value": "76895"
          },
          {
              "id": "MI",
              "value": "67695"
          },
          {
              "id": "IN",
              "value": "33592"
          },
          {
              "id": "OH",
              "value": "32960"
          },
          {
              "id": "PA",
              "value": "54346"
          },
          {
              "id": "NY",
              "value": "42828"
          },
          {
              "id": "VT",
              "value": "77411"
          },
          {
              "id": "NH",
              "value": "51403"
          },
          {
              "id": "ME",
              "value": "64636"
          },
          {
              "id": "MA",
              "value": "51767"
          },
          {
              "id": "CT",
              "value": "57353"
          },
          {
              "id": "NJ",
              "value": "80788"
          },
          {
              "id": "WV",
              "value": "95890"
          },
          {
              "id": "VA",
              "value": "83140"
          },
          {
              "id": "NC",
              "value": "97344"
          },
          {
              "id": "SC",
              "value": "88234"
          },
          {
              "id": "FL",
              "value": "88234"
          }
      ]
  }; */

    this.dataSource ={
      "chart": {
          "caption": "Annual Sales by State",
          "subcaption": "Last year",
          "entityFillHoverColor": "#cccccc",
          "numberScaleValue": "1,1000,1000",
          "numberScaleUnit": "K,M",
          "numberPrefix": "$",
          "showLabels": "1",
          "theme": "ocean"
      },
      "colorrange": {
          "minvalue": "0",
          "startlabel": "Low",
          "endlabel": "High",
          "code": "#e44a00",
          "gradient": "1",
          "color": [
              {
                  "maxvalue": "1500",
                  "displayvalue": "Average",
                  "code": "#f8bd19"
              },
              {
                  "maxvalue": "10000",
                  "code": "#6baa01"
              }
          ]
      },
      "data": [
          {"id":"05","value":138},{"id":"03","value":1068},{"id":"06","value":3563},{"id":"02","value":376},{"id":"09","value":691},{"id":"07","value":1773},{"id":"10","value":3430},{"id":"08","value":1948},{"id":"11","value":1225}
      ]
  }; 
/* this.dataSource =
  {
    "chart": {
        "animation": "0",
        "showbevel": "0",
        "usehovercolor": "1",
        "canvasbordercolor": "FFFFFF",
        "bordercolor": "FFFFFF",
        "showlegend": "1",
        "showshadow": "0",
        "legendposition": "BOTTOM",
        "legendborderalpha": "0",
        "legendbordercolor": "ffffff",
        "legendallowdrag": "0",
        "legendshadow": "0",
        "caption": "Website Visits for the month of Jan 2014",
        "connectorcolor": "000000",
        "fillalpha": "80",
        "hovercolor": "CCCCCC",
        "showborder": 0
    },
    "colorrange": {
        "minvalue": "0",
        "startlabel": "Low",
        "endlabel": "High",
        "code": "e44a00",
        "gradient": "1",
        "color": [{"maxvalue": "2500", "code": "f8bd19"}, {"maxvalue": "5000", "code": "6baa01"}]
    },
    "data": [{"id":"05","value":138},{"id":"03","value":1068},{"id":"06","value":3563},{"id":"02","value":376},{"id":"09","value":691},{"id":"07","value":1773},{"id":"10","value":3430},{"id":"08","value":1948},{"id":"11","value":1225}]
}
   */
}
  ngOnInit() {
  }

}
