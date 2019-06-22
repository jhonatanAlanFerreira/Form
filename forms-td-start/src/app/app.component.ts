import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( ){}

  arr = ['jhonatan', 'alan', 'bertini', 'ferreira', 'jessica', 'carolina', 'seila', 'mano','numsei','teste','ordem','pipe','numseidenovo','ah mano','testando'];

  busca:string;
  pg = 0;

ngOnInit(){

}

}
