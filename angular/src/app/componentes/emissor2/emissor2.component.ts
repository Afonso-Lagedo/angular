import { Component } from '@angular/core';

@Component({
  selector: 'app-emissor2',
  templateUrl: './emissor2.component.html',
  styleUrls: ['./emissor2.component.css']
})
export class Emissor2Component {
  nome: string = "Afonso";

  onEventoTeste(){
    this.nome = "Felipe";
  }
}
