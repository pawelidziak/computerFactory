import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {FactoriesComponent} from './factories.component';

@NgModule({
  declarations: [
    FactoriesComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
  ],
  exports: [
    FactoriesComponent
  ]
})
export class FactoriesModule {
}
