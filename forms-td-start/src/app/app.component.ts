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
      vc_email: ['', [Validators.email]],
      ch_checked: [false, Validators.requiredTrue]
    })
  });

}

get control(){return this.formulario.controls}

submited(){
 if(this.formulario.controls.vc_nome.valid) console.log("Foi enviado "+this.formulario.controls.vc_nome.value+" "+this.control.email['controls'].vc_email.value);
}

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
