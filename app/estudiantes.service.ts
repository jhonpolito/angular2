export class EstudiantesService{
  listaDeEstudiantes(universidad: any): Array<string> {
if (universidad = 'universidad nacional') {
    return ['Oscar Munera.', 'Simon Lopez.', 'Carmenza Zapata.', 'Olivia Morales.', 'Orfa Linares.'];
    /*return ['Oscar Munera', 'Simon Lopez', 'Rogelio Nuñes'];*/
  }else {
   return ['Natalia Ochoa', 'Marina Torres', 'Luis Severich'];
  /*return ['Natalia Ochoa', 'Marina Torres', 'Luis Severich'];*/
    }
  }
}
