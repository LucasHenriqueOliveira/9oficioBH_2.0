import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContaPage } from './conta';
import { CpfPipe } from '../../pipes/cpf/cpf';
import { PhonePipe } from '../../pipes/phone/phone';

@NgModule({
  declarations: [
    ContaPage,
    CpfPipe,
    PhonePipe
  ],
  imports: [
    IonicPageModule.forChild(ContaPage)
  ]
})
export class ContaPageModule {}
