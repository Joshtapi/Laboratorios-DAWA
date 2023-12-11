import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.username = this.authService.getUsername() || '';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('Sesión cerrada');
  }
}
