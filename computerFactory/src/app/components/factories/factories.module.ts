import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material';
import {FactoriesComponent} from './factories.component';

@NgModule({
  declarations: [
    FactoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatButtonModule,
  ],
  exports: [
    FactoriesComponent
  ]
})
export class FactoriesModule {
}
