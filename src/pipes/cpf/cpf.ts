import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CpfPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  
  transform(value:string){
    if(value){
         value = value.toString();
         if(value.length === 11){
             return value.substring(0,3).concat(".")
                                  .concat(value.substring(3,6))
                                  .concat(".")
                                  .concat(value.substring(6,9))
                                  .concat("-")
                                  .concat(value.substring(9,11))
         } 
     }
     return value;
 }
}
