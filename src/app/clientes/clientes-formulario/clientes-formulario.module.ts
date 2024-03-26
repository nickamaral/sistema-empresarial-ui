import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesFormularioComponent } from './clientes-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ClientesFormularioFotoModule } from './clientes-formulario-foto/clientes-formulario-foto.module';
import { ClientesFormularioFotoComponent } from './clientes-formulario-foto/clientes-formulario-foto.component';
import { MensagensDoSistemaModule } from 'src/app/shared/components/mensagens-do-sistema/mensagens-do-sistema.module';




@NgModule({
  declarations: [
    ClientesFormularioComponent,
  ],
  exports: [
    ClientesFormularioComponent,
    ClientesFormularioFotoComponent,
  ],
  imports: [
    FormsModule,
    ButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    MensagensDoSistemaModule,
    CommonModule,
    InputTextModule,
    InputMaskModule,
    ClientesFormularioFotoModule,
  ]
})
export class ClientesFormularioModule { }
