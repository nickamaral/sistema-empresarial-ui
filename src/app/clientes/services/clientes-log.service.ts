import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteLog } from '../interfaces/cliente-log.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesLogService {

  constructor(private http:HttpClient) { }
  listaTudo(){
    return this.http.get<ClienteLog[]>("http://localhost:8080/clientes-log")
  }
}
