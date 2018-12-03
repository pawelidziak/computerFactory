import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatListModule} from '@angular/material';
import {OrdersComponent} from './orders.component';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatListModule,
  ],
  exports: [
    OrdersComponent
  ]
})
export class OrdersModule {
}
