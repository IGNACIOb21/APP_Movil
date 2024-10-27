import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-reset-contra',
  templateUrl: './reset-contra.page.html',
  styleUrls: ['./reset-contra.page.scss'],
})
export class ResetContraPage {
  newPassword: string | undefined;
  message: string | undefined;
  users: User[] = [];
  email: string | undefined;

  constructor(private http: HttpClient, private router: Router) {
    // Cargar usuarios desde el archivo JSON
    this.loadUsers();

    // Obtener el correo del estado de navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
    }
  }

  loadUsers() {
    this.http.get<{ users: User[] }>('assets/info.json').subscribe(data => {
      this.users = data.users;
    });
  }

  submitNewPassword() {
    if (!this.newPassword) {
      this.message = 'La nueva contraseña no puede estar vacía.';
      return; // Salir si la nueva contraseña es indefinida
    }

    // Encontrar el usuario basado en el correo electrónico
    const userIndex = this.users.findIndex(u => u.email === this.email);
    
    if (userIndex !== -1) {
      // Actualizar la contraseña del usuario
      const updatedUser: User = {
        ...this.users[userIndex],
        contraseña: this.newPassword 
      };

      this.users[userIndex] = updatedUser; 

      // Mensaje de éxito
      this.message = 'Contraseña restablecida exitosamente.';


      // Redirigir al login 
      this.router.navigate(['/login']);
    } else {
      this.message = 'Usuario no encontrado.';
    }
  }
}
