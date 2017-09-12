import { NgModule } from '@angular/core';
import { CpfPipe } from './../pipes/cpf/cpf';
import { PhonePipe } from './../pipes/phone/phone';
@NgModule({
	declarations: [CpfPipe,
    PhonePipe],
	imports: [],
	exports: [CpfPipe,
    PhonePipe]
})
export class PipesModule {}
