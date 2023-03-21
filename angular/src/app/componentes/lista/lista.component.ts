import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  comidas=[
    {nome: 'prato feito', tipo:'almoço'},
    {nome: 'açaí', tipo:'sobremesa'},
    {nome: 'teste-comida', tipo:'teste'},
  ];

}
