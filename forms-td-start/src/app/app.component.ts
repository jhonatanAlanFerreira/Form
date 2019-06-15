import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    vc_nome: ['',Validators.required],
    email: this.fb.group({
      vc_email: ['', Validators.required],
      ch_checked: [false, Validators.requiredTrue]
    })
  });

}

submited(){
  console.log("Foi enviado");
}

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
