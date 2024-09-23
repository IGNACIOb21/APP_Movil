import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  mensaje: string = ''; // Mensaje que se mostrará al hacer clic en el botón

  constructor() {}

  ngOnInit() {}

  mostrarTexto() {
    this.mensaje = 'Próximamente este botón abrirá la cámara';
  }
}
