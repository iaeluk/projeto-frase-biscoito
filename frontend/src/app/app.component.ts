import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  frases: string[] = [
    'A vida é boa.',
    'Nunca desista dos seus sonhos.',
    'Aprenda algo novo todos os dias.',
    'Seja grato por tudo que tem.',
  ];
  fraseAleatoria: string = '';
  mostrarFrase: boolean = false;

  exibirFrase() {
    this.fraseAleatoria = this.frases[Math.floor(Math.random() * this.frases.length)];
    this.mostrarFrase = true;
  }
}
