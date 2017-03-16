export class EstudiantesService{
  listaDeEstudiantes(universidad: any): Array<string> {
if (universidad = 'universidad nacional') {
    return ['Oscar Munera.', 'Simon Lopez.', 'Carmenza Zapata.', 'Olivia Morales.', 'Orfa Linares.'];
  }else {
   return ['Natalia Ochoa'];
    }
  }
}
