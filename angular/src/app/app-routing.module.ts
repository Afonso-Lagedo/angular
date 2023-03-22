import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './componentes/lista/lista.component';
import { PrimeiroComponent } from './componentes/primeiro/primeiro.component';

const routes: Routes = [
  {path: '', component:PrimeiroComponent},
  {path: 'lista', component:ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
