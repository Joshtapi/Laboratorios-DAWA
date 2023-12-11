// auth.service.ts
import { Injectable } from '@angular/core';

// auth.service.ts
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: string | null = null;
  private users = [
    { username: 'jtapia', password: '1234' },
    { username: 'usuario2', password: '1234' },
    // Agregar más usuarios aquí
  ];

  isLoggedIn = false;
  currentUser: { username: string } | null = null;

  login(username: string, password: string): boolean {
    const foundUser = this.users.find(
      user => user.username === username && user.password === password
    );
    if (foundUser) {
      this.isLoggedIn = true;
      this.loggedInUser = username;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  getUsername(): string | null {
    return this.loggedInUser;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUser = null;
  }
}
