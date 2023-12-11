import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  titulo: string = '¡ Bienvenido a Angular !';
  mensaje: string = 'Esto es un componente de saludo creado en Angularr';

  constructor() { }

  ngOnInit(): void {
  }

}
