import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {LogStationModule} from '../log-station/log-station.module';
import {FactoriesModule} from '../factories/factories.module';
import {CreateSetModule} from '../create-set/create-set.module';
import {ResultModule} from '../result/result.module';
import {OrdersModule} from '../orders/orders.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,

    LogStationModule,
    FactoriesModule,
    CreateSetModule,
    ResultModule,
    OrdersModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
