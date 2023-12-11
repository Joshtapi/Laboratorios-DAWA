import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  usuariosRegistrados: any[] = [];

  onSubmit(formulario: NgForm) {
    this.confirmarEnvio(formulario);
  }

  confirmarEnvio(formulario: NgForm) {
    if (formulario.valid && confirm('¿Estás seguro de enviar el formulario?')) {
      console.log('El formulario ha sido enviado');
      console.log(`nombre: ${this.nombre}`);
      console.log(`email: ${this.email}`);

      this.usuariosRegistrados.push({
        nombre: this.nombre,
        email: this.email
      });

      formulario.resetForm();
    }
  }
}




