import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import $ from 'jquery';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FloorplanService } from '../providers/floorplan.service';

@Component({
    templateUrl: 'Floorplan.component.html',
    providers: [ FloorplanService ]
})

export class FloorplanComponent implements OnInit {
    public test = 0;
    public z1class = '';

    private fp = [];
    public zoneClass = {'AtriumZone1': 'zone-null', 'AtriumZone2': 'zone-null', 'AtriumZone3': 'zone-null',
                        'AtriumZone4': 'zone-null', 'MalaZone1': 'zone-null', 'MalaZone2': 'zone-null'};
    public zoneWifiClass = {'Mala2Zone1': 'zone-null'};

    public socialChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Utilization'
    }
    ];

    public socialChartLabels: Array<any> = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00',
                                            '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  public socialChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public socialChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      pointBorderColor: 'rgba(255,255,255,.99)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public socialChartLegend = false;
  public socialChartType = 'line';


    constructor(private fpService: FloorplanService) {

    }

    updateZones(): void {
        this.fpService.getZones().subscribe(responseFP => this.fp = responseFP);
        for(let camera in this.fp['cameras']) {
            for(let zone in this.fp['cameras'][camera]) {
                let camid = camera+zone;
                camid = camid.replace(/\"/g,"");
                camid = camid.replace(' ', '');
                this.zoneClass[camid] = this.fp['cameras'][camera][zone] ? 'zone-occupied' : 'zone-free';
            }
        }
    }

    ngOnInit(): void {
        this.updateZones();

        setInterval(() => {
            this.updateZones();
        }, 5000);
    }
}
