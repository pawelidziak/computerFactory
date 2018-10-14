import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatFormFieldModule, MatListModule, MatSelectModule} from '@angular/material';
import {CreateSetComponent} from './create-set.component';

@NgModule({
  declarations: [
    CreateSetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    CreateSetComponent
  ]
})
export class CreateSetModule {
}
