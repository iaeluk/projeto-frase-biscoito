import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-frases',
  templateUrl: './cadastro-frases.component.html',
  styleUrls: ['./cadastro-frases.component.sass']
})

export class CadastroFrasesComponent {

  apiUrl = 'https://biscoito-da-sorte-59c63b6adf76.herokuapp.com/';

  frase: string = '';

  constructor(private http: HttpClient) { }

  cadastrarFrase() {
    const body = { frase: this.frase };
    const headers = { 'Content-Type': 'application/json' }; // Defina os cabeçalhos da requisição

    return this.http.post(this.apiUrl, JSON.stringify(body), { headers }).subscribe({
      next: () => {
        console.log('Frase cadastrada com sucesso!');
        alert('Frase cadastrada com sucesso!');
        this.frase = ''
        // Realize qualquer ação necessária após o cadastro da frase, como exibir uma mensagem de sucesso, por exemplo.
      },
      error: (err: any) => { console.log('Erro ao cadastrar a frase:', err); },
      complete: () => { }
    });
  }
}
