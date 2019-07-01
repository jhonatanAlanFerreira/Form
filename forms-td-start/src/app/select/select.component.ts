import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Output('valorChange') _valor = new EventEmitter<number>();

  @Input() dados:{}[] = []; //Array com os dados a exibir na tabela.
  @Input() titulos:string[] = []; //Array com as titulos a exibir na th (Opcional).
  @Input() colunas:string[] = []; //Array com as chaves dos dados que serão exibidas em colunas, caso não especificadas, todas seram exibidas.
  @Input() idUnica:string = 'sr_id'; //Chave principal que deve ser enviado ao banco quando salvar. Default('sr_id')
  @Input() nome:string = 'vc_nome'; //Chave com o nome a exibir no lugar do select quando selecionado. Default('vc_nome')
  @Input() filtros:string[] = ['vc_nome']; //Array com as chaves que entram na busca por pesquisa. Default(['vc_nome'])
  @Input() intervalo = 0; //Intervalo a esperar antes de fazer a busca, é zerado enquanto o usuário estiver digitando (Melhorar desempenho em arrays grandes). Default(0)
  @Input() valor = ''; //Variável com two way binding em idUnica -> [(valor)]="id"
  @Input() largura = 200; //Largura em pixels usado no componente, usar somente números, default(200)

  public selecionar(selecionado:{}){ //Pode ser usado por ViewChild para selecionar um objeto.
    this.value = selecionado[this.nome];
    this.valueId = selecionado[this.idUnica];
    this.open = false;
    this._valor.emit(this.valueId);
  }

  @ViewChild('table',{static:false}) table: ElementRef;

  colunasEspecificadas = false;
  valores = [];
  filtrado = [];
  open = false;
  value = 'Selecione...';
  valueId = null;
  _filtro = '';
  timeOut = null;
  qtdTitulos:number;
  qtdColunas:number;

  @HostListener('document:click',['$event']) click(event){
   if(!this.table.nativeElement.contains(event.target)) this.open = false;
  }

  ngOnInit() {
    this.qtdTitulos = this.titulos.length;
    this.qtdColunas = this.colunas.length;

    this.filtro();
    
    if(this.colunas.length > 0){
      this.colunasEspecificadas = true;
    }else
    if(this.dados.length > 0) for(let dado in this.dados[0]) this.valores.push(dado);

  }

  filtro(){
    if(this.timeOut) clearTimeout(this.timeOut);
    this.timeOut =  setTimeout(() => {
      this.filtrado = [];
      var i = 0; //Usado para efeito striped em tabela
      this.filtros.forEach(filtro => {
        let _filtro = this.dados.filter((item:any) => {
           if(item[filtro].toString().indexOf(this._filtro) != -1){
            item['index'] = i++; //Usado para efeito striped em tabela
            return true;
           };
        });
        this.filtrado.push(..._filtro);
      });
    },+this.intervalo);
  }

}
