import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parente',
  templateUrl: './parente.component.html',
  styleUrls: ['./parente.component.css']
})
export class ParenteComponent {
  @Input() jogador!: {nome:string, idade:number, posicao:string}; //! exclamação serve para inicialização do dado 
  @Input() time:string= "";
}
