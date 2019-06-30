import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Output('valorChange') _valor = new EventEmitter<number>();

  @Input() dados = [];
  @Input() titulos = [];
  @Input() colunas = [];
  @Input() idUnica = 'sr_id';
  @Input() nome = 'vc_nome';
  @Input() filtros = ['vc_nome'];
  @Input() intervalo = 0;
  @Input() valor = null;
  @Input() largura = 200;

  @ViewChild('table',{static:false}) table: ElementRef;

  colunasEspecificadas = false;
  valores = [];
  filtrado = [];
  open = false;
  value = 'Selecione...';
  valueId = null;
  _filtro = '';
  timeOut = null;

  @HostListener('document:click',['$event']) click(event){
   if(!this.table.nativeElement.contains(event.target)) this.open = false;
  }

  selecionar(selecionado:any){
    this.value = selecionado[this.nome];
    this.valueId = selecionado[this.idUnica];
    this.open = false;
    this._valor.emit(this.valueId);
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
    this.timeOut =  setTimeout(() => {
      this.filtrado = [];
      this.filtros.forEach(filtro => this.filtrado.push(...this.dados.filter((item:any) => item[filtro].toString().indexOf(this._filtro) != -1)));
    },+this.intervalo);
  }

}
