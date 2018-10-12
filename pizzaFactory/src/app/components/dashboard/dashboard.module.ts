import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatButtonModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
