export class EstudiantesService{
  listaDeEstudiantes(universidad: any): Array<string> {
if (universidad = 'universidad naciona') {
    return ['Oscar Munera.', 'Simon Lopez.', 'Carmenza Zapata.', 'Olivia Morales.', 'Orfa Linares.'];
  }else {
   return ['Natalia Ochoa'];
    }
  }
}
