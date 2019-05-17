import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout/nav/nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatRippleModule
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }
