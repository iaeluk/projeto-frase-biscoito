import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
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
