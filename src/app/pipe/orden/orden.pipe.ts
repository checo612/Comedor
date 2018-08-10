import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orden'
})
export class OrdenPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    console.log('pipe' + value, args);
    if (args && value) {
      return value.filter(orden => {
       return orden = (orden.usuario === args);
      });
    } else {
      return value;
    }

  }

}
