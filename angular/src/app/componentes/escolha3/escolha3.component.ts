import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-escolha3',
  templateUrl: './escolha3.component.html',
  styleUrls: ['./escolha3.component.css']
})
export class Escolha3Component {
  @Output() eventoTeste3:EventEmitter<any> = new EventEmitter();

  eventoClick3(){
    this.eventoTeste3.emit();
  }
}
