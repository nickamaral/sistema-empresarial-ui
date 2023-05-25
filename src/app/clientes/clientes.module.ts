import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';  
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { ClientesFormularioModule } from './clientes-formulario/clientes-formulario.module';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesBuscaComponent } from './clientes-busca/clientes-busca.component';
import { ClientesBuscaModule } from './clientes-busca/clientes-busca.module';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ClientesLogComponent } from './clientes-log/clientes-log.component';
import { ClientesLogModule } from './clientes-log/clientes-log.module';


@NgModule({
  declarations: [ClientesComponent],
  exports: [ClientesComponent],
  imports: [
    ClientesLogModule,
    ClientesFormularioModule,
    ClientesBuscaModule,
    ToastModule,
    CommonModule,
    ButtonModule,
    ToggleButtonModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
  ]
  ,providers: [
    ConfirmationService
  ]
})
export class ClientesModule { }
