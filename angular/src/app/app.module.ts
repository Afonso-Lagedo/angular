import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './componentes/primeiro/primeiro.component';
import { ParenteComponent } from './componentes/parente/parente.component';
import { CampeonatoComponent } from './componentes/campeonato/campeonato.component';
import { DiretivaComponent } from './componentes/diretiva/diretiva.component';
import { CondicionalComponent } from './componentes/condicional/condicional.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    ParenteComponent,
    CampeonatoComponent,
    DiretivaComponent,
    CondicionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
