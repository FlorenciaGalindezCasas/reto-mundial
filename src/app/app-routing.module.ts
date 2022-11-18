import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { OctavosFinalComponent } from './pages/octavos-final/octavos-final.component';
import { CuartosFinalComponent } from './pages/cuartos-final/cuartos-final.component';
import { SemisComponent } from './pages/semis/semis.component';
import { DefinicionComponent } from './pages/definicion/definicion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'login', component: FormularioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'octavos', component: OctavosFinalComponent },
  { path: 'cuartos', component: CuartosFinalComponent },
  { path: 'semis', component: SemisComponent },
  { path: 'definicion', component: DefinicionComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


