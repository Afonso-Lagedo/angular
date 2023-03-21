import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './componentes/primeiro/primeiro.component';
import { ParenteComponent } from './componentes/parente/parente.component';
import { CampeonatoComponent } from './componentes/campeonato/campeonato.component';
import { DiretivaComponent } from './componentes/diretiva/diretiva.component';
import { CondicionalComponent } from './componentes/condicional/condicional.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { EmissorComponent } from './componentes/emissor/emissor.component';
import { EscolhaNumComponent } from './componentes/escolha-num/escolha-num.component';

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
    EscolhaNumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
