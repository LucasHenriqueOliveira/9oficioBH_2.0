import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivacidadePage } from './privacidade';

@NgModule({
  declarations: [
    PrivacidadePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivacidadePage),
  ],
})
export class PrivacidadePageModule {}
