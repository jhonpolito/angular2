import { EstudiantesComponent } from './estudiantes.component';
import { Component} from '@angular/core';


@Component({
  selector: 'mi-app',
  template: `<h1>Hola Mundo Desde Angular 2.</h1>
<estudiantes [universidad]="laUniversidad"
(seleccionado)="mostrarEstudiante($event)"></estudiantes>`,
  /*directives: [EstudiantesComponent]*/
})

export class AppComponent  {
  laUniversidad = "universidad nacional";

  mostrarEstudiante(evento: any ): void {
      console.log(evento.nombre);
  }
}
