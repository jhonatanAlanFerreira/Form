import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private fb: FormBuilder){}

  formulario: FormGroup;

ngOnInit(){

  window.addEventListener('scroll', ()=> {
    let scrolled = document.documentElement.scrollHeight - window.innerHeight;

    console.log(`scrolled -> ${scrolled} window -> ${window.scrollY}`)

    if (scrolled <= window.scrollY) console.log("Final da página!");
  })

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
    }
  }

  deleteGroup(i){
    (<FormArray>this.formulario.get('array')).removeAt(i);
  }

}
