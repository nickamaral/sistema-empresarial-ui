import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagens-do-sistema',
  templateUrl: './mensagens-do-sistema.component.html',
  styleUrls: ['./mensagens-do-sistema.component.scss']
})
export class MensagensDoSistemaComponent {
  @Input() mensagem!: string
  @Input() tipo!: string 
}
