import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private fb: FormBuilder){}

  formulario: FormGroup;

ngOnInit(){
  this.formulario = this.fb.group({
    vc_nome: ['', Validators.required],
    vc_email: ['', [Validators.required, Validators.email]]
  });
}

submited(){

  }

}
