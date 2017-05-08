import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ConfigurationComponent } from './configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';

@NgModule({
  imports: [
    ConfigurationRoutingModule,
    ChartsModule
  ],
  declarations: [ ConfigurationComponent ]
})
export class ConfigurationModule { }
