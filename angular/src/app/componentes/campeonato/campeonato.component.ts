import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.css']
})
export class CampeonatoComponent {
  @Input () campeonato!: {nome:string, divisao:string, ano:number};
}
