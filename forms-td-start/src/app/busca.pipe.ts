import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busca'
})
export class BuscaPipe implements PipeTransform {

  transform(itens:[], busca:string): any {
    if(!busca) return itens;
    let filtro = itens.filter((element:string) => {
      return element.indexOf(busca) != -1
    });

    return filtro;

  }

}
