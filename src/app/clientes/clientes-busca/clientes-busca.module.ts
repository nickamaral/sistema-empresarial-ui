import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesBuscaComponent } from './clientes-busca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ClientesBuscaComponent

  ],
  exports: [
    ClientesBuscaComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class ClientesBuscaModule { }
