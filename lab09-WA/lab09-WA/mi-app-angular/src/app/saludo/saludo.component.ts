import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  titulo: string = 'Hola Mundo';
  mensaje: string = '¡Hola a todos!';

  constructor() { }

  ngOnInit(): void {
  }
}
