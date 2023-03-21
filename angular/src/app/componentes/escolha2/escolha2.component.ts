import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-escolha2',
  templateUrl: './escolha2.component.html',
  styleUrls: ['./escolha2.component.css']
})
export class Escolha2Component {
  @Output() eventoTeste:EventEmitter<any> = new EventEmitter();

  eventoClick2(){
    this.eventoTeste.emit();
  }
}
