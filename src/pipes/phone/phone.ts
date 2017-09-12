import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PhonePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  
	transform(value:string){
		if(value){
			value = value.toString();
			let estado = '';
			
			switch (value.length) {
				case 8: // ####-####
					return value.substring(0,4).concat("-").concat(value.substring(4,8))

				case 9: // #####-####
					return value.substring(0,5).concat("-").concat(value.substring(5,9))

				case 10: // (##)####-####
					return '(' + value.substring(0,2) + ")" + value.substring(2,6).concat("-").concat(value.substring(6,10))

				case 11: // (##)#####-####
					return '(' + value.substring(0,2) + ")" + value.substring(2,7).concat("-").concat(value.substring(7,11))
			}
		}
		return value;
	}
}
