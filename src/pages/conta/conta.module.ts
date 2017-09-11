import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContaPage } from './conta';
import { CpfPipe } from './cpf.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    ContaPage,
    CpfPipe,
    PhonePipe
  ],
  imports: [
    IonicPageModule.forChild(ContaPage),
  ],
})
export class ContaPageModule {}
