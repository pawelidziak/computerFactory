import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatListModule} from '@angular/material';
import {LogStationComponent} from './log-station.component';

@NgModule({
  declarations: [
    LogStationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatButtonModule,
    MatListModule,
  ],
  exports: [
    LogStationComponent
  ]
})
export class LogStationModule {
}
