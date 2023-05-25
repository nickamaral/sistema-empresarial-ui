import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-clientes-log',
  templateUrl: './clientes-log.component.html',
  styleUrls: ['./clientes-log.component.scss']
})
export class ClientesLogComponent {
  logsDoCliente=[
    {data:"00/00/2000 00:00:00",
    nome: "Nicolas Amaral",
    sala: "100",
    status: "Entrada"},
  ]

}
