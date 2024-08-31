import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() nomeProjeto: string;
  @Input() anoProjeto: string;
  @Input() autorProjeto: string;
  @Input() curso: string;
  @Input() orientador: string;
  @Input() qtdAcessos: string;
}
