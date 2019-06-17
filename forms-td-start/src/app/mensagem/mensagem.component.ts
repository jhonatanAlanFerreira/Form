import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {

  constructor() { }

  @HostListener('document: click') click(){
    this.showEnviado = this.showErro = false;
   }

  classCssErro;
  showErro;

  classCssEnviado;
  showEnviado;

 public erro(){
  this.showErro = true;
  this.classCssErro = true;

  setTimeout(()=>this.classCssErro = false);
  }

  public enviado(){
    this.showEnviado = true;
    this.classCssEnviado = true;

    setTimeout(()=>this.classCssEnviado = false);
  }

}
