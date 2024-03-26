import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Message } from "primeng/api";
import { ClienteForm } from "src/app/clientes/interfaces/cliente-form.interface";
import { ClientesService } from "src/app/clientes/services/clientes.service";
import { SalaService } from "../services/sala.service";
import { SalaForm } from "../interfaces/sala-form.interface";
import { SalaModel } from "../interfaces/sala-model.interface";
import { ErrorModelApi } from "src/app/shared/interfaces/error-model-api.interface";

@Component({
  selector: 'app-salas-formulario',
  templateUrl: './salas-formulario.component.html',
  styleUrls: ['./salas-formulario.component.scss']
})
export class SalasFormularioComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = false; 
  isInserindo: boolean = false; 
  messages: Message [] = []
  idParaAlterar: string = ""
  idParaBuscar: string = ""
  mensagemDeErroDaApi: string = ""
  
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private router: Router,
    private salaService: SalaService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params && params["id"]){
        this.messages=[]
        this.isInserindo=false
        this.idParaAlterar=params["id"]
        this.salaService.buscaPorId(this.idParaAlterar).subscribe(salaModel=>{
          this.form = this.formBuilder.group({ 
            empresa: [salaModel.empresa,[Validators.required]], //validacoes formbuilder angu apenas front 
            andar: [salaModel.andar,[Validators.required]],
            cnpj: [salaModel.cnpj,[Validators.required]],
            numero: [salaModel.numero],
            responsavel: [salaModel.responsavel,],
            tipoSala: [salaModel.tipoSala]
        })
        
        })
      }else{
        this.messages = []
        this.isInserindo=true
        this.form = this.formBuilder.group({ 
          empresa: ["",[Validators.required]], //validacoes formbuilder angu apenas front 
          andar: ["",[Validators.required]],
          cnpj: [""],
          responsavel: [""],
          numero: ["",[Validators.required]],
          tipoSala: [""]
        })
      }
    })
  }
  criaSala(){
    this.loading= true
    const sala = this.form.getRawValue() as SalaForm  //pega objeto criado do form
    if(this.isInserindo){
      this.salaService.criaCliente(sala).subscribe(salaCriada=>this.realizaAcoesDeSucesso(salaCriada),
                                                      error=>this.realizaAcoesDeErro(error))
    }else{
      this.salaService.atualizaPorId(this.idParaAlterar,sala).subscribe(()=>this.realizaAcoesDeSucessoParaAlterar(),
                                                      error=>this.realizaAcoesDeErro(error))
    }
  }
  realizaAcoesDeErro(error: any): void {
    console.log(error)
    const apiError = new ErrorModelApi(error.error)
    this.mensagemDeErroDaApi=apiError.getMensagemDeErro();
    this.messages = [{ severity: 'error', summary: 'ERRO', detail:`${apiError.message}` }]; 
    this.loading = false
  }
  realizaAcoesDeSucesso(salaCriada:SalaModel): void {
    this.form.reset()
    this.messages = [{ severity: 'success', summary: 'Successo', detail: 'Criado com sucesso' }]; 
    this.loading = false
  }
  realizaAcoesDeSucessoParaAlterar(): void {
    this.form.reset()
    this.messages = [{ severity: 'success', summary: 'Successo', detail: 'Alterado sucesso' }]; 
    this.loading = false
  }
}