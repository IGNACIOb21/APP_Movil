import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
  
})
export class MainPagePage implements OnInit {
  mensaje: string = ''; // Mensaje que se mostrará al hacer clic en el botón

  constructor(
    private readonly router: Router,
    private readonly alertController: AlertController,
    private readonly loginService: LoginService
  ) {}

  ngOnInit() {}

  mostrarTexto() {
    this.mensaje = 'Próximamente este botón abrirá la cámara';
  }

  confirmLogout(){
    this.alertController.create({
      header: 'Close session',
      message: 'Are you sure to close session?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Close session',
          handler: () => {
            this.logout();
          }
        }
      ]
    })
    .then(a => a.present());
  }

  private logout(){
    this.loginService.logout()
    this.router.navigateByUrl('/login');
  }

}
