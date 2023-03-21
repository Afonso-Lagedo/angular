import { Component } from '@angular/core';

@Component({
  selector: 'app-emissor3',
  templateUrl: './emissor3.component.html',
  styleUrls: ['./emissor3.component.css']
})
export class Emissor3Component {
  teste:number = 0;

  onEventoTeste3(){
    this.teste=1;
  }
}
