import { Component } from '@angular/core';
import { Roupa } from 'src/app/Roupas';
import { ListaTwoService } from 'src/app/services/lista-two.service';

@Component({
  selector: 'app-lista-two',
  templateUrl: './lista-two.component.html',
  styleUrls: ['./lista-two.component.css']
})
export class ListaTwoComponent {
  roupas: Roupa[]=[];

  preco='';
  
  mostraPreco(roupa:Roupa): void{
    this.preco = `A ${roupa.nome} custa ${roupa.preco}`;
  }

  removeRoupa(roupa:Roupa){
    console.log('Removendo ...');
    this.roupas=this.listaTwoService.remove(this.roupas, roupa); //função do service
  }

  constructor(private listaTwoService: ListaTwoService){
    this.getRoupas()
  }

  getRoupas():void{
    this.listaTwoService.getAll().subscribe((x) => (this.roupas=x));
  }
}
