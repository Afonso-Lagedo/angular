import { Injectable } from '@angular/core';

import { Comida } from '../Comidas';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  //método de removeComida
  remove(comidas:Comida[], comida:Comida){
    return comidas.filter((b) => comida.nome !== b.nome);
  }

}
