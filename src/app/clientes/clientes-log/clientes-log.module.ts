import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesLogComponent } from './clientes-log.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [ClientesLogComponent],
  exports: [ClientesLogComponent],
  imports: [
    TableModule,
    CommonModule
  ]
})
export class ClientesLogModule { }
