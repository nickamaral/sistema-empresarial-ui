import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensDoSistemaComponent } from './mensagens-do-sistema.component';
import { MessagesModule } from 'primeng/messages';



@NgModule({
  declarations: [MensagensDoSistemaComponent],
  exports: [MensagensDoSistemaComponent,],
  imports: [
    CommonModule,
    MessagesModule,
  ]
})
export class MensagensDoSistemaModule { }
