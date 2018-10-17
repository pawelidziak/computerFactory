import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ResultComponent} from './result.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatButtonModule
  ],
  exports: [
    ResultComponent
  ]
})
export class ResultModule {
}
