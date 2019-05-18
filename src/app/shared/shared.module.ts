import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './libraries/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LazySrcDirective} from './directives/lazy-src/lazy-src.directive';

@NgModule({
  declarations: [LazySrcDirective],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, LazySrcDirective]
})
export class SharedModule {}
