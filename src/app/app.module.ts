import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavInicioComponent } from './nav-inicio/nav-inicio.component';
import { MainInicioComponent } from './main-inicio/main-inicio.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavInicioComponent,
    MainInicioComponent,
    FormularioLoginComponent,
    BienvenidoComponent,
    PerfilUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
