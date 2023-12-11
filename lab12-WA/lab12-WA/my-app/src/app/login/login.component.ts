// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  invalidCredentials = false; // Variable para manejar el estado de las credenciales inválidas

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/profile']); // Redirigir a la página de perfil si la autenticación es exitosa
    } else {
      this.invalidCredentials = true; // Manejar caso de credenciales inválidas
    }
  }  
}


