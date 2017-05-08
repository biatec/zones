import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class FloorplanService {
    constructor(private http: Http) {}
    
    private url:string = 'http://10.202.1.10:1880/occupancy/status';
    
    getZones() {
        return this.http.get(this.url).map((response: Response) => response.json());
    }
}
