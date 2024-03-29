import { Component, OnInit } from '@angular/core';
import { ClientesService } from './services/clientes.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { Router } from '@angular/router';
import { path } from '../shared/constants/path';
import { ClienteModel } from './interfaces/cliente-model.interface';
import { ClienteModelInfos } from './interfaces/cliente-model-infos.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ClientesComponent implements OnInit {
  urlFotoCliente?: string = ""
  listaDeClientes: ClienteModel[] = []
  modalInformacoesClienteVisible: boolean = false;
  clienteSelecionado?: ClienteModelInfos;
  constructor(private clienteService: ClientesService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.buscaListaDeClientes()
  }
  private buscaListaDeClientes() {
    this.clienteService.listaTudo().subscribe(clientesJava => this.listaDeClientes = clientesJava)
  }
  abreModalParaRemoverCliente(cliente: ClienteModel) {
    console.log('teste', cliente)
    this.confirmationService.confirm({
      message: `Essa ação não poderá ser desfeita, deseja remover o cliente ${cliente.nome}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clienteService.delete(cliente.id).subscribe(resposta => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Cliente deletado' });
          this.buscaListaDeClientes()
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
  editaCliente(cliente: ClienteModel) {
    this.router.navigateByUrl(`/${path.CLIENTE_FORMULARIO}/${cliente.id}`)
  }
  abreFormulario() {
    this.router.navigateByUrl(`/${path.CLIENTE_FORMULARIO}`)
  }
  abreBusca() {
    this.router.navigateByUrl(`/${path.CLIENTE_BUSCA}`)
  }
  clienteComoAusente(cliente: ClienteModel) {
    this.clienteService.marcaClienteAusente(cliente).subscribe(() => {
      this.buscaListaDeClientes()
    })
  }
  abreLogDeCliente(cliente: ClienteModel) {
    this.router.navigateByUrl(`/${path.CLIENTE_LOG}/${cliente}`)
  }
  abreModalDeInformacoesCliente(cliente: ClienteModel) {
    this.modalInformacoesClienteVisible = true
    this.urlFotoCliente = ""
    this.clienteService.pegaTodasInformacoesDoCliente(cliente).subscribe(clienteInfo => this.clienteSelecionado = clienteInfo)
    this.clienteService.buscaPorFoto(cliente).subscribe((response: any) => {
      let dataType = response.type;
      let binaryData = [];
      binaryData.push(response);
      this.urlFotoCliente = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
    }
    )
  }
  atualizaListaClientes() {
    this.buscaListaDeClientes()
  }
}
