import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( ){}

  pessoas = [
    {nome: 'jhonatan',idade: 25, teste:"testando"},
    {nome: 'alan',idade: 34, teste:"testando"},
    {nome: 'bertini',idade: 43, teste:"testando"},
    {nome: 'ferreira',idade: 56, teste:"testando"},
    {nome: 'jessica',idade: 56, teste:"testando"},
    {nome: 'carolina',idade: 80, teste:"testando"}
  ]

ngOnInit(){
 
}

}
