import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './layout/nav/nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [NavComponent]
})
export class CoreModule {}
