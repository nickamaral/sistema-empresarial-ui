import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteStatusForm } from '../interfaces/cliente-status-form.interface';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes-sala-formulario',
  templateUrl: './clientes-sala-formulario.component.html',
  styleUrls: ['./clientes-sala-formulario.component.scss']
})
export class ClientesSalaFormularioComponent implements OnInit{
  @Input() idCliente!: string
  @Output() atualizarListaEventEmmitter=new EventEmitter()
    form!: FormGroup;
constructor(private formBuilder:FormBuilder,private clientesService:ClientesService){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      sala:['',Validators.required]
    })
  }
  enviaSala(){
    const formSala = this.form.getRawValue()
    console.log(formSala.sala)
    console.log(this.idCliente)
    const clienteStatusForm:ClienteStatusForm={sala: formSala.sala,status:"PRESENTE",}
    this.clientesService.marcaClientePresente(this.idCliente,clienteStatusForm).subscribe(()=> this.atualizarListaEventEmmitter.emit())
  }


}

