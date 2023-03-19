import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jogador = {
    nome: "Afonso",
    idade: 29,
    posicao: "QB"
  }

  time:string='Monsters';

  campeonato = {
    nome: "SPFL",
    divisao: "ouro",
    ano: 2023
  }
  
  title = 'angular';
}
