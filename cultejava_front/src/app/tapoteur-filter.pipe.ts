import { Pipe, PipeTransform } from '@angular/core';
import { TapoteurRequestResponse } from './modelTapoteur';

@Pipe({
  name: 'tapoteurFilter'
})
export class TapoteurFilterPipe implements PipeTransform {

  transform(value: Array<TapoteurRequestResponse>, nom?: string, rang?: string): Array<TapoteurRequestResponse> {
    let newArray: Array<TapoteurRequestResponse>;

    if (rang != ''){
      if (nom != ''){
        newArray = value.filter(t => t.rang.indexOf(rang) !== -1);
        return newArray.filter(t => t.nom.toLowerCase().indexOf(nom.toLowerCase()) !== -1);
      }else{
        return value.filter(t => t.rang.indexOf(rang) !== -1);
      }
    }else{
      return nom != '' ? value.filter(t => t.nom.toLowerCase().indexOf(nom.toLowerCase()) !== -1) : value;
    }
  }

}
