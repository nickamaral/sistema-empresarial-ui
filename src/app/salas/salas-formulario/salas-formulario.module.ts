import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasFormularioComponent } from './salas-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { MensagensDoSistemaModule } from 'src/app/shared/components/mensagens-do-sistema/mensagens-do-sistema.module';



@NgModule({
  declarations: [SalasFormularioComponent],
  exports: [SalasFormularioComponent,],
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    MensagensDoSistemaModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
  ]
})
export class SalasFormularioModule { }
