import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteForm } from '../interfaces/cliente-form.interface';
import { ClientesService } from '../services/clientes.service';
import { Message } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { ClientesModule } from '../clientes.module';
import { ClienteModel } from '../interfaces/cliente-model.interface';

@Component({
  selector: 'app-clientes-busca',
  templateUrl: './clientes-busca.component.html',
  styleUrls: ['./clientes-busca.component.scss']
})
export class ClientesBuscaComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = false; 
  messages: Message [] = [] //mensagens de erro
  clienteEncontrado?: ClienteModel //? = pode ter ou nao
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({ 
      cpf: [""], 
  })
  }
  buscaCpf(){
    this.loading= true
    const cpf = this.form.get("cpf")?.value  
    return this.clientesService.buscaPorCpf(cpf).subscribe(clienteModel=>this.realizaAcoesDeSucesso(clienteModel),
                                                        error=>this.realizaAcoesDeErro(error))
    
  }
  realizaAcoesDeErro(error: any): void {
    console.log(error)
    this.messages = [{ severity: 'error', summary: 'ERRO', detail: 'Erro nas informações' }]; 
    this.loading = false
  }
  realizaAcoesDeSucesso(clienteModel:ClienteModel): void {
    this.form.reset()
    this.clienteEncontrado=clienteModel
    this.messages = [{ severity: 'success', summary: 'Successo', detail: 'Criado com sucesso' }]; 
    this.loading = false
  }
  realizaAcoesDeSucessoParaAlterar(): void {
    this.form.reset()
    this.messages = [{ severity: 'success', summary: 'Successo', detail: 'Alterado sucesso' }]; 
    this.loading = false
  }
}
