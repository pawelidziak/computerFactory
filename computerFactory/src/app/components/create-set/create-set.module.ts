import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatListModule, MatSelectModule} from '@angular/material';
import {CreateSetComponent} from './create-set.component';
import {CreateSetService} from './create-set.service';

@NgModule({
  declarations: [
    CreateSetComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    CreateSetComponent
  ],
  providers: [
    CreateSetService
  ]
})
export class CreateSetModule {
}
