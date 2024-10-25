import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'; // Import Router

import { LoginService } from 'src/app/services/login.service';
import { ToastController } from "@ionic/angular";
import { User } from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  message!: string;
  username!: string;
  password!: string;

  constructor(
    private readonly toastController: ToastController,
    private router: Router,
    private readonly loginService: LoginService
  ) {} // Inject Router

  validateLogin() {
    console.log("validación del inicio de sesión ha comenzado")

    this.loginService
      .authenticate(this.username, this.password)
      .then(user => {
        this.authenticateHandler(user);
      })
      .catch(err => {
        console.log('Error en login: ', err)
        this.failedAuthentication();
      });
  }

  private authenticateHandler(user: User | null) {
    user ? this.successAuthentication() : this.failedAuthentication()
  }

  private failedAuthentication(message: string = 'Inicio de sesión fallido') {
    this.generateMessage(message, 'danger')
      .then(() => { console.log('Inicio de sesión fallido') });
  }

  private successAuthentication() {
    this.generateMessage('Inicio de sesión exitoso', 'success')
      .then(() => {
        console.log('Inicio de sesión exitoso');
        return this.router.navigateByUrl('/main-page')
      })
      .then(() => console.log('Navegado a casa'));
  }

  async generateMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'middle',
      color: color
    });
    await toast.present();
  }

  navigateToRegister() {
    this.router.navigate(['/registro']); // Ensure this route exists in your app
  }
}

