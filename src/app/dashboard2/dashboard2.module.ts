import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { Dashboard2Component } from './dashboard2.component';
import { Dashboard2RoutingModule } from './dashboard2-routing.module';

@NgModule({
  imports: [
    Dashboard2RoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ Dashboard2Component ]
})
export class Dashboard2Module { }
