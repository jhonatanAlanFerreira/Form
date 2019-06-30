import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( ){}

  @ViewChild(SelectComponent,{static:false}) appSelect:SelectComponent;

  id = '';

  pessoas = [
    {vc_nome: 'jhonataasdasdasdasdasfdsasfdsfasfn',sr_id: 25, teste:"testando"},
    {vc_nome: 'alan',sr_id: 34, teste:"testando"},
    {vc_nome: 'bertini',sr_id: 43, teste:"testando"},
    {vc_nome: 'ferreira',sr_id: 56, teste:"testando"},
    {vc_nome: 'jessica',sr_id: 56, teste:"testando"},
    {vc_nome: 'carolina',sr_id: 80, teste:"testando"},
    {vc_nome: 'jhonatan',sr_id: 25, teste:"testando"},
    {vc_nome: 'alan',sr_id: 34, teste:"testando"},
    {vc_nome: 'bertini',sr_id: 43, teste:"testando"},
    {vc_nome: 'ferreira',sr_id: 56, teste:"testando"},
    {vc_nome: 'jessica43',sr_id: 56, teste:"testando"},
    {vc_nome: 'carolina',sr_id: 80, teste:"testando"}
  ]

  enviar(){
   alert("ID -> "+this.id);
  }

ngOnInit(){
 setTimeout(()=>this.appSelect.selecionar({vc_nome: 'carolina',sr_id: 80, teste:"testando"}),2000);//Teste evento selecionando
}

}
