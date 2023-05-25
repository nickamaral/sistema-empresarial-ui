import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ClientesLogService } from '../services/clientes-log.service';
import { ClienteLog } from '../interfaces/cliente-log.interface';

@Component({
  selector: 'app-clientes-log',
  templateUrl: './clientes-log.component.html',
  styleUrls: ['./clientes-log.component.scss']
})
export class ClientesLogComponent implements OnInit {
  logsDoCliente:ClienteLog[] = []
  
  constructor(private clientesLogService: ClientesLogService){}
  
  ngOnInit(): void {
    this.clientesLogService.listaTudo().subscribe(clienteslog=>this.logsDoCliente=clienteslog)
  }
}
