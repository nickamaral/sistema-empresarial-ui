import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-sala-formulario',
  templateUrl: './clientes-sala-formulario.component.html',
  styleUrls: ['./clientes-sala-formulario.component.scss']
})
export class ClientesSalaFormularioComponent implements OnInit{
  @Input() idCliente!: string
  form!: FormGroup;
constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      sala:['',Validators.required]
    })
  }
  enviaSala(){
    const formSala = this.form.getRawValue()
    console.log(formSala.sala)
    console.log(this.idCliente)
  }
}

