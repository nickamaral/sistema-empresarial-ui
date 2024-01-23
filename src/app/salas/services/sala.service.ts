import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { SalaModel } from '../interfaces/sala-model.interface';
import { SalaForm } from '../interfaces/sala-form.interface';

const URL_API = `${environment.URL_API}/salas`
@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private http: HttpClient) { }
  
  
  buscaPorId(id:string  ) {
    return this.http.get<SalaModel>(`${URL_API}/${id}`)
  }
  atualizaPorId(id:string  ,sala:SalaForm) {
    return this.http.put(`${URL_API}/${id}`,sala)
  }
  delete(id: any) {
    return this.http.delete(`${URL_API}/${id}`)
  }
  
  listaTudo(){
    return this.http.get<SalaModel[]>(`${URL_API}`)
  }
  criaCliente(sala: SalaForm) {
    return this.http.post<SalaModel>(`${URL_API}`,sala)
  }

}

