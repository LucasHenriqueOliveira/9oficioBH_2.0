import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestamentoPage } from './testamento';

@NgModule({
  declarations: [
    TestamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(TestamentoPage),
  ],
})
export class TestamentoPageModule {}
