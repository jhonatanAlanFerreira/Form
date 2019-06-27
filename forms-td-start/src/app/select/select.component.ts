import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() dados = [];
  @Input() colunas = [];
  @Input() idUnica = 'sr_id';

  valores = [];

  selecionar(dado){
    console.log(dado);
  }

  ngOnInit() {
    if(this.dados.length > 0) for(let dado in this.dados[0]) this.valores.push(dado);
  }

}
