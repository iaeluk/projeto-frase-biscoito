import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroFrasesComponent } from './pages/cadastro-frases/cadastro-frases.component';
import { Erro404Component } from './pages/erro404/erro404.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/biscoito', pathMatch: 'full' },
  { path: "biscoito", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroFrasesComponent },
  { path: "**", component: Erro404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
