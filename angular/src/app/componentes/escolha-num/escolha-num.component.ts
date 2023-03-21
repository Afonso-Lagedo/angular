import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-escolha-num',
  templateUrl: './escolha-num.component.html',
  styleUrls: ['./escolha-num.component.css']
})
export class EscolhaNumComponent {
  @Output() escolhaNumero:EventEmitter<any> = new EventEmitter();

  eventoClick() {
    this.escolhaNumero.emit();
  }

}
