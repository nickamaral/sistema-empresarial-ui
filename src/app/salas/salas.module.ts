import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';  
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ImageModule } from 'primeng/image';
import { SafePipeModule } from 'safe-pipe';
import { SalasComponent } from './salas.component';


@NgModule({
  declarations: [SalasComponent, ],
  exports: [SalasComponent],
  imports: [
    DialogModule,
    ToastModule,
    CommonModule,
    ButtonModule,
    ToggleButtonModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    PipesModule,
    ImageModule,
    SafePipeModule,
  ]
  ,providers: [
    ConfirmationService,
    MessageService,
  ]
})
export class SalasModule { }
