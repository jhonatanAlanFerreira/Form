import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {

  constructor() { }

  classCss;
  show;

 public change(){
  this.show = true;
  this.classCss = true;

  setTimeout(()=>this.classCss = false);
  }

}
