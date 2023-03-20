import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent {
  //criando e aplicando padrões
  cor = 'blue';
  tamanho = 40;

  diretivaClasse = ['classe1', 'classe2'];
  diretivaClasse2 = 'classe3';
}
