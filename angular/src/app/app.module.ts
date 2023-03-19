import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './componentes/primeiro/primeiro.component';
import { ParenteComponent } from './componentes/parente/parente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    ParenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
