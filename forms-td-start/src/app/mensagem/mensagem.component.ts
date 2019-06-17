import { Component } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {

  constructor() { }

  classCssErro;
  showErro;

 public erro(){
  this.showErro = true;
  this.classCssErro = true;

  setTimeout(()=>this.classCssErro = false);
  }

}
