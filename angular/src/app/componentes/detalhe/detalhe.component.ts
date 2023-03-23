import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Roupa } from 'src/app/Roupas';

import { ListaTwoService } from 'src/app/services/lista-two.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {
  roupa?:Roupa;

  constructor(private listaTwoService: ListaTwoService, private route:ActivatedRoute){
    this.getRoupa()
  }

  getRoupa(){
    const id = Number(this.route.snapshot.paramMap.get("id"));//extrair id
    this.listaTwoService.getItem(id).subscribe((y)=> (this.roupa=y));
  }
}
