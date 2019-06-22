import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagina'
})
export class PaginaPipe implements PipeTransform {
direcao = 0;
limite = 5;

  transform(itens:[], direcao:number): any {
  
  if(direcao < this.direcao) {
    if(itens.length > 5 && this.limite >= 10)  {
      this.limite -= 5;
      this.direcao = direcao;
      return itens.slice(this.limite - 5,this.limite);
    }
  }
  else if(direcao > this.direcao){
    if(this.limite < itens.length) {
      this.limite += 5;
      this.direcao = direcao;
      return itens.slice(this.limite - 5,this.limite);
    }else {
      this.direcao = direcao;
      return itens.slice(this.limite - 5,this.limite);
    }
  }

  this.direcao = direcao;
  this.limite = 5;
  return itens.slice(this.limite - 5,this.limite);
  }
}
