import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard.component';
import {LogStationModule} from '../log-station/log-station.module';
import {FactoriesModule} from '../factories/factories.module';
import {CreateSetModule} from '../create-set/create-set.module';
import {ResultModule} from '../result/result.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    LogStationModule,
    FactoriesModule,
    CreateSetModule,
    ResultModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
