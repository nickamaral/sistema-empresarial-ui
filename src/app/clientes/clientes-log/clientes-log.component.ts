import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ClientesLogService } from '../services/clientes-log.service';
import { ClienteLog } from '../interfaces/cliente-log.interface';
import * as XLSX from 'xlsx';

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
  title = 'export-excel';
  fileName = 'ExportExce.xlsx';
  exportExcel(): void {
    const tabelaHtml = document.getElementById('suaTabela'); // Substitua 'suaTabela' pelo ID da sua tabela HTML
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.table_to_sheet(tabelaHtml);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Planilha'); // 'Planilha' é o nome da aba na planilha

    // Salvar a planilha como arquivo Excel
    XLSX.writeFile(workbook, 'sua_planilha.xlsx');
  }
}
