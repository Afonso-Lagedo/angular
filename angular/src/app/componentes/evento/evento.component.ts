import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  evento: boolean=false;

  evento1():void{
    this.evento= true;
    //exemplo, para apenas inverter os valores: TOGGLE
    //this.evento=!this.evento
  }
}
