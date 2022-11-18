import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CuartosFinalComponent } from './pages/cuartos-final/cuartos-final.component';
import { OctavosFinalComponent } from './pages/octavos-final/octavos-final.component';
import { SemisComponent } from './pages/semis/semis.component';
import { DefinicionComponent } from './pages/definicion/definicion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './pages/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormularioComponent,
    CuartosFinalComponent,
    OctavosFinalComponent,
    SemisComponent,
    DefinicionComponent,
    RegistroComponent,
    ErrorComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    providePerformance(() => getPerformance())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
