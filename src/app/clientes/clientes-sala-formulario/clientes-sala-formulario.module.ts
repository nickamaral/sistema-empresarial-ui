import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesSalaFormularioComponent } from './clientes-sala-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [ClientesSalaFormularioComponent],
  exports: [ClientesSalaFormularioComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ]
})
export class ClientesSalaFormularioModule { }
