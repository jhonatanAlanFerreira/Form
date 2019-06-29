import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

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
  @Input() intervalo = 0;

  @ViewChild('table',{static:false}) table: ElementRef;

  colunasEspecificadas = false;
  valores = [];
  filtrado = [];
  open = false;
  value = 'Selecione...'
  valueId = null;
  _filtro = '';
  timeOut = null;

  @HostListener('document:click',['$event']) click(event){
    console.log(event.target)
    console.log(this.table.nativeElement)
   if(!this.table.nativeElement.contains(event.target)) this.open = false;
  }

  selecionar(selecionado:any){
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
     this.filtrado = this.dados.filter((item:any) => item[this.filtrarPor].indexOf(this._filtro) != -1);
    },+this.intervalo);
  }

}
