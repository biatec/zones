import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FloorplanComponent } from './floorplan.component';
import { FloorplanRoutingModule } from './floorplan-routing.module';

@NgModule({
  imports: [
    FloorplanRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ FloorplanComponent ]
})
export class FloorplanModule { }
