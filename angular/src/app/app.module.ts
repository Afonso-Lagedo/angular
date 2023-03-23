import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './componentes/primeiro/primeiro.component';
import { ParenteComponent } from './componentes/parente/parente.component';
import { CampeonatoComponent } from './componentes/campeonato/campeonato.component';
import { DiretivaComponent } from './componentes/diretiva/diretiva.component';
import { CondicionalComponent } from './componentes/condicional/condicional.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { EmissorComponent } from './componentes/emissor/emissor.component';
import { EscolhaNumComponent } from './componentes/escolha-num/escolha-num.component';
import { Emissor2Component } from './componentes/emissor2/emissor2.component';
import { Escolha2Component } from './componentes/escolha2/escolha2.component';
import { Escolha3Component } from './componentes/escolha3/escolha3.component';
import { Emissor3Component } from './componentes/emissor3/emissor3.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { PipeComponent } from './componentes/pipe/pipe.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { ListaTwoComponent } from './componentes/lista-two/lista-two.component';
import { DetalheComponent } from './componentes/detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    ParenteComponent,
    CampeonatoComponent,
    DiretivaComponent,
    CondicionalComponent,
    EventoComponent,
    EmissorComponent,
    EscolhaNumComponent,
    Emissor2Component,
    Escolha2Component,
    Escolha3Component,
    Emissor3Component,
    ListaComponent,
    PipeComponent,
    TwoWayComponent,
    ListaTwoComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
