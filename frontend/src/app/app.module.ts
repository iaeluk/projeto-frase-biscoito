import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CadastroFrasesComponent } from './pages/cadastro-frases/cadastro-frases.component';
import { HomeComponent } from './pages/home/home.component';
import { Erro404Component } from './pages/erro404/erro404.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFrasesComponent,
    HomeComponent,
    Erro404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
