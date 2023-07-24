import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-frases',
  templateUrl: './cadastro-frases.component.html',
  styleUrls: ['./cadastro-frases.component.sass']
})

export class CadastroFrasesComponent {
  isModalOpen :boolean = false;

  openModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
