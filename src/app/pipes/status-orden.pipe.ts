import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusOrden'
})
export class StatusOrdenPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: Array<any>, args?: any): any {
    console.log('value', value);
    console.log('args?', args );

    if (args) {
      value.map(orden => {
        console.log('orden', orden);
        console.log('orden.status', orden.estatus);
        orden.estatus = orden.estatus === args;
        console.log(orden);
        return orden;
      });
    }
    return value;
  }

}
