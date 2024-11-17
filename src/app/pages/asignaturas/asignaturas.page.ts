import { Component } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {
  asignaturas = [
    { sigla: 'ARQ002D', profesor: 'Prof. BENJAMIN MORA', titulo: 'Arquitectura' },
    { sigla: 'CSW002d', profesor: 'Prof. PATRICIO SOTO', titulo: 'Calidad de Software' },
    { sigla: 'APP002D', profesor: 'Prof. CARLOS MARTINEZ', titulo: 'Aplicaciones Móviles' },
    { sigla: 'EST001D', profesor: 'Prof. FRANCISCO ORELLANA', titulo: 'Estadística Descriptiva' },
    { sigla: 'ET002D', profesor: 'FRANCISCA ARANCIBIA', titulo: 'Ética para el Trabajo' },
  ];

  detalleVisible = false;
  detalle = { sigla: '', profesor: '', titulo: '' };

  mostrarDetalle(asignatura: { sigla: string; profesor: string; titulo: string }) {
    this.detalle = asignatura;
    this.detalleVisible = true;
  }
}
