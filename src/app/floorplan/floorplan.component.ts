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
    public zoneClass = {'AtriumZone1': 'zone-null', 'AtriumZone2': 'zone-null', 'AtriumZone3': 'zone-null', 'AtriumZone4': 'zone-null', 'MalaZone1': 'zone-null', 'MalaZone2': 'zone-null'};
    public zoneWifiClass = {'Mala2Zone1': 'zone-null'};

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
