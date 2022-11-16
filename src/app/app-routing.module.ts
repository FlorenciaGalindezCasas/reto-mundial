import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { OctavosFinalComponent } from './pages/octavos-final/octavos-final.component';
import { CuartosFinalComponent } from './pages/cuartos-final/cuartos-final.component';
import { SemisComponent } from './pages/semis/semis.component';
import { DefinicionComponent } from './pages/definicion/definicion.component';

const routes: Routes = [
  {path:"", redirectTo: 'home', pathMatch:'full'},
  {path:"home", component: HomeComponent},
  {path:"login", component: FormularioComponent},
  {path:"octavos", component: OctavosFinalComponent},
  {path:"cuartos", component: CuartosFinalComponent},
  {path:"semis", component: SemisComponent},
  {path:"definicion", component: DefinicionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
