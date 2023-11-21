import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteForm } from '../interfaces/cliente-form.interface';
import { ClientesService } from '../services/clientes.service';
import { Message } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { ClientesModule } from '../clientes.module';
import { ClienteModel } from '../interfaces/cliente-model.interface';
import { path } from 'src/app/shared/constants/path';


@Component({
  selector: 'app-clientes-formulario',
  templateUrl: './clientes-formulario.component.html',
  styleUrls: ['./clientes-formulario.component.scss']
})
export class ClientesFormularioComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = false; 
  isInserindo: boolean = false; 
  messages: Message [] = []
  idParaAlterar: string = ""
  idParaBuscar: string = ""
  
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params && params["id"]){
        this.messages=[]
        this.isInserindo=false
        this.idParaAlterar=params["id"]
        this.clientesService.buscaPorId(this.idParaAlterar).subscribe(clienteModel=>{
          this.form = this.formBuilder.group({ 
            nome: [clienteModel.nome,[Validators.required]], //validacoes formbuilder angu apenas front 
            email: [clienteModel.email,[Validators.required,Validators.email]],
            idade: [clienteModel.idade],
            endereco: [clienteModel.endereco],
            cpf: [clienteModel.cpf,[Validators.required,Validators.maxLength(14),Validators.minLength(14)]],
            telefone: [clienteModel.telefone]
        })
        
        })
      }else{
        this.messages = []
        this.isInserindo=true
        this.form = this.formBuilder.group({ 
          nome: ["",[Validators.required]], //validacoes formbuilder angu apenas front 
          email: ["",[Validators.required,Validators.email]],
          idade: [""],
          endereco: ["rua continental"],
          urlFoto: [""],
          cpf: ["",[Validators.required,Validators.maxLength(14),Validators.minLength(14)]],
          telefone: ["11965245568"]
        })
      }
    })
  }
  criaCliente(){
    this.loading= true
    const cliente = this.form.getRawValue() as ClienteForm  //pega objeto criado do form
    if(this.isInserindo){
      this.clientesService.criaCliente(cliente).subscribe(clienteCriado=>this.realizaAcoesDeSucesso(clienteCriado),
                                                      error=>this.realizaAcoesDeErro(error))
    }else{
      this.clientesService.atualizaPorId(this.idParaAlterar,cliente).subscribe(()=>this.realizaAcoesDeSucessoParaAlterar(),
                                                      error=>this.realizaAcoesDeErro(error))
    }
  }
  realizaAcoesDeErro(error: any): void {
    console.log(error)
    this.messages = [{ severity: 'error', summary: 'ERRO', detail: 'Erro nas informações' }]; 
    this.loading = false
  }
  realizaAcoesDeSucesso(clienteCriado:ClienteModel): void {
    this.form.reset()
    this.messages = [{ severity: 'success', summary: 'Successo', detail: 'Criado com sucesso' }]; 
    this.loading = false
    this.router.navigateByUrl(`/${path.CLIENTE_FORMULARIO_FOTO}/${clienteCriado.id}`)
  }
  realizaAcoesDeSucessoParaAlterar(): void {
    this.form.reset()
    this.messages = [{ severity: 'success', summary: 'Successo', detail: 'Alterado sucesso' }]; 
    this.loading = false
    this.router.navigateByUrl(`/${path.CLIENTE_FORMULARIO_FOTO}/${this.idParaAlterar}`)
  }
}
