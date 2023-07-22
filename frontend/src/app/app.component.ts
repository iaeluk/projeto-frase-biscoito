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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarFrases();
  }

  carregarFrases() {
    this.http.get<{ frase: string }[]>(this.apiUrl).subscribe(
      {
        next: (queryParams) => {
          this.frases = queryParams.map(item => item.frase);
        },
        error: (err: any) => { console.log('Erro ao carregar as frases:', err); },
        complete: () => { }
      }
    );
  }

  exibirFrase() {
    this.fraseAleatoria = this.frases[Math.floor(Math.random() * this.frases.length)];
    this.mostrarFrase = true;
  }
}
