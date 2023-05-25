import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesFormularioComponent } from './clientes-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ClientesFormularioComponent
  ],
  exports: [
    ClientesFormularioComponent
  ],
  imports: [
    FormsModule,
    ButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    CommonModule,
    InputTextModule,
  ]
})
export class ClientesFormularioModule { }
