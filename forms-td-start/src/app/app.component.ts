import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MensagemComponent } from './mensagem/mensagem.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(MensagemComponent) erro;

  constructor( private fb: FormBuilder){}

  formulario: FormGroup;

ngOnInit(){
  this.formulario = this.fb.group({
    array: this.fb.array([
      this.fb.group({
        vc_nome: ['', Validators.required],
        vc_email: ['',[Validators.required, Validators.email]]
      })
    ])
  });
}

addGroup(){
  let grupo = this.fb.group({
    vc_nome: ['', Validators.required],
    vc_email: ['',[Validators.required, Validators.email]]
  });
  (<FormArray>this.formulario.get('array')).push( grupo );
}

submited(){
    let dados = [];

    for (let i in this.formulario.get('array').value) 
    dados.push({
      nome: this.formulario.get(`array.${i}.vc_nome`).value,
      email: this.formulario.get(`array.${i}.vc_email`).value
    });
    
    if(this.formulario.valid)
    console.log("DADOS -> ",dados);
    else {
      this.formulario.markAllAsTouched();
      console.log("Existem dados invalidos");
      this.erro.change();
    }
  }

  removeErro(){
    this.erro.show = false;
  }

  deleteGroup(i){
    (<FormArray>this.formulario.get('array')).removeAt(i);
  }

}
