import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf.pipe';
import { TelefonePipe } from './telefone.pipe';
import { SafePipePipe } from './safe-pipe.pipe';



@NgModule({
  declarations: [CpfPipe, TelefonePipe, SafePipePipe],
  exports: [CpfPipe, TelefonePipe, SafePipePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

