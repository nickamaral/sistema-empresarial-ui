import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteForm } from '../interfaces/cliente-form.interface';
import { ClienteModel } from '../interfaces/cliente-model.interface';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { ClienteStatusForm } from '../interfaces/cliente-status-form.interface';
import { ClienteModelInfos } from '../interfaces/cliente-model-infos.interface';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  pegaTodasInformacoesDoCliente(cliente: ClienteModel) {
    return this.http.get<ClienteModelInfos>(`http://localhost:8080/clientes/id/${cliente.id}/infos`)
    }
  constructor(private http:HttpClient) { }

  marcaClienteAusente(cliente: ClienteModel) {
    const clienteStatusForm={status:"AUSENTE"}
    return this.http.post(`http://localhost:8080/clientes/${cliente.id}/status`,clienteStatusForm)
  }
  marcaClientePresente(id:string,clienteStatusForm:ClienteStatusForm){
    return this.http.post(`http://localhost:8080/clientes/${id}/status`,clienteStatusForm)
  }

  buscaPorId(id:string  ) {
    return this.http.get<ClienteModel>(`http://localhost:8080/clientes/${id}`)
  }
  atualizaPorId(id:string  ,cliente:ClienteForm) {
    return this.http.put(`http://localhost:8080/clientes/${id}`,cliente)
  }
  delete(id: any) {
    return this.http.delete(`http://localhost:8080/clientes/${id}`)
  }
  
  listaTudo(){
    return this.http.get<ClienteModel[]>("http://localhost:8080/clientes")
  }
  criaCliente(cliente: ClienteForm) {
    return this.http.post("http://localhost:8080/clientes",cliente)
  }
  buscaPorCpf(cpf:string ){
    return this.http.get<ClienteModel>(`http://localhost:8080/clientes/cpf/${cpf}`)
  }
}
