import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() dados = [];
  @Input() titulos = [];
  @Input() colunas = [];
  @Input() idUnica = 'sr_id';
  @Input() nome = 'vc_nome';
  @Input() filtrarPor = 'vc_nome';

  colunasEspecificadas = false;
  valores = [];
  filtrado = [];
  open = false;
  value = 'Selecione...'
  valueId = null;
  _filtro = '';
  timeOut = null;

  selecionar(selecionado:any){
    console.log(selecionado);
    this.value = selecionado[this.idUnica];
    this.valueId = selecionado[this.nome];
    this.open = false;
  }

  ngOnInit() {
    this.filtrado = this.dados;
    
    if(this.colunas.length > 0){
      this.colunasEspecificadas = true;
    }else
    if(this.dados.length > 0) for(let dado in this.dados[0]) this.valores.push(dado);

  }

  filtro(){
    if(this.timeOut) clearTimeout(this.timeOut);
    this.timeOut =  setTimeout(()=> {
     
    },2000)
  }

}
