import { EstudiantesService } from './estudiantes.service';
import { Component, Input, Output, EventEmitter, } from '@angular/core';


@Component({
  selector: 'estudiantes',
  templateUrl: 'templates/estudiantes.template.html',
  providers: [EstudiantesService]
})
export class EstudiantesComponent {
  @Output() seleccionado = new EventEmitter();
  @Input() universidad: string;
  titulo = 'Lista de Estudiantes';
  estudiantes: string[] ;
  imgUrl = 'http://lorempicsum.com/futurama/255/200/2';
  redondeadas = false;
  padding = true;

constructor(estudiantesService: EstudiantesService) {
  this.estudiantes = estudiantesService.listaDeEstudiantes('universidad nacional');
}

  clickEnEstudiante(evento: any): void {
     this.seleccionado.emit({nombre: evento.target.textContent});
  }
}
