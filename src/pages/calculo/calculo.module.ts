import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculoPage } from './calculo';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    CalculoPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculoPage),
    CurrencyMaskModule
  ],
})
export class CalculoPageModule {}
