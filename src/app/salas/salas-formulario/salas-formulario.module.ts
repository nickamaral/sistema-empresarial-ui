import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasFormularioComponent } from './salas-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SalasFormularioComponent],
  exports: [SalasFormularioComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SalasFormularioModule { }
