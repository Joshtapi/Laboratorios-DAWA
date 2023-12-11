import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})

export class MiDirectivaDirective {

  @HostListener('click', ['$event'])
  onClick(event: any) {
    console.log('El elemento ha sido clickeado');
  }
  
}
