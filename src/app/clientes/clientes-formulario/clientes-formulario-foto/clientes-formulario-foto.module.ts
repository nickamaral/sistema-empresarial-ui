import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFormularioFotoComponent } from './clientes-formulario-foto.component';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  exports: [ClientesFormularioFotoComponent],
  declarations: [ClientesFormularioFotoComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClientesFormularioFotoModule { }
