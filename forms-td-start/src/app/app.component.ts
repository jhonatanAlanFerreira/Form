import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private fb: FormBuilder){}

  possiveis = ["Teste","Testando"];

  formulario: FormGroup;

  validando(controler: FormControl){
    return this.possiveis.indexOf(controler.value) != -1? {'validando':true} : null;
  }


ngOnInit(){
  this.formulario = this.fb.group({
    vc_nome: ['',Validators.required],
    validate: ['',[Validators.required,this.validando.bind(this)]],
    email: this.fb.group({
      vc_email: ['', [Validators.email]],
      ch_checked: [false, Validators.requiredTrue]
    })
  });

}

get control(){return this.formulario.controls}

submited(){
// if(this.formulario.controls.vc_nome.valid) console.log("Foi enviado "+this.formulario.controls.vc_nome.value+" "+this.control.email['controls'].vc_email.value);
console.log(this.formulario.get('email.vc_email').value);

let nomes=[{nome: "jhonatan", idade: 25},
            {sobrenome: "Ferreira", tempo: 120}];

            nomes.forEach(item => {
              for(let chave in item) console.log(`${chave} -> ${item[chave]}`)
            })


}

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
