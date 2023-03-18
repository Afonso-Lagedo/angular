import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent {
  nome: string = 'Afonso';
  idade: number = 29;
  trabalho: string = 'Desenvolvedor';
  linguagens = ['JS', 'PHP'];
  objeto = {
    nome: "objeto 1",
    teste: "OK"
  }
}
