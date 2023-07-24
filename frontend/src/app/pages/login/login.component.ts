import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  usuario :string = ''
  senha :any = undefined;
  falhaLogin :boolean = false

  constructor(private router: Router) {}

  fazerLogin() {
    if (this.usuario.toLowerCase() == "abudhabi" && this.senha == 12345678) {
      this.router.navigate(["/cadastro"])
    } else {
      this.falhaLogin = true
      this.usuario = ''
      this.senha = undefined
    }
  }

}
