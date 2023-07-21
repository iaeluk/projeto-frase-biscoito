import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  apiUrl = 'https://biscoito-da-sorte-59c63b6adf76.herokuapp.com/';
  frases: string[] = [];
  fraseAleatoria = '';
  mostrarFrase = false;
  urlImagem = '../assets/img/biscoito.png';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarFrases();
  }

  carregarFrases() {
    this.http.get<{ frase: string }[]>(this.apiUrl).subscribe(
      (data) => {
        this.frases = data.map(item => item.frase);
        console.log(this.frases);
      },
      (error) => {
        console.log('Erro ao carregar as frases:', error);
      }
    );
  }

  exibirFrase() {
    this.fraseAleatoria = this.frases[Math.floor(Math.random() * this.frases.length)];
    this.mostrarFrase = true;
    this.mudarImagem();
  }

  mudarImagem(){
    this.urlImagem = '../assets/img/biscoito-back.png'
  }
}
