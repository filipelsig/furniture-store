import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout/nav/nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }
