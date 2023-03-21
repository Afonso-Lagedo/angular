import { Component } from '@angular/core';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.css']
})
export class EmissorComponent {
  numero:number = 0;

  onEscolhaNumero(){
    this.numero = Math.floor(Math.random()*10);
  }
}
