import { Component } from '@angular/core';
import { Comida } from 'src/app/Comidas';//interface

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  comidas: Comida[]=[
    {nome: 'prato feito', tipo:'almoço', preco:10},
    {nome: 'açaí', tipo:'sobremesa', preco:5},
    {nome: 'teste-comida', tipo:'teste', preco:1},
  ];

  preco='';
  
  mostraPreco(comida:Comida): void{
    this.preco = `A ${comida.nome} custa ${comida.preco}`;
  }

}
