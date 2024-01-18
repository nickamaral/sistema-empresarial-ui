import { Component, OnInit } from '@angular/core';
import { SalaModel } from './interfaces/sala-model.interface';
import { SalaService } from './services/sala.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { path } from '../shared/constants/path';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {
  listaDeSalas: SalaModel[] = []
  constructor(private salaService: SalaService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.buscaListaDeSalas()
  }
  private buscaListaDeSalas() {
    this.salaService.listaTudo().subscribe(salasJava => this.listaDeSalas = salasJava)
  }
  abreModalParaRemoverSala(sala: SalaModel) {
    console.log('teste', sala)
    this.confirmationService.confirm({
      message: `Essa ação não poderá ser desfeita, deseja remover o cliente ${sala.empresa}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.salaService.delete(sala.id).subscribe(resposta => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Sala deletada' });
          this.buscaListaDeSalas()
        });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Ação rejeitada' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'Ação cancelada' });
            break;
        }
      }
    });


  }
  editaSala(sala: SalaModel) {
    this.router.navigateByUrl(`/${path.SALA_FORMULARIO}/${sala.id}`)
  }
  abreFormulario() {
    this.router.navigateByUrl(`/${path.SALA_FORMULARIO}`)
  }
  atualizaListaSalas() {
    this.buscaListaDeSalas()
  }
}
