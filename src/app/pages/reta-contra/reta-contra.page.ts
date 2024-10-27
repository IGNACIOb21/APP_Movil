import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-reta-contra',
  templateUrl: './reta-contra.page.html',
  styleUrls: ['./reta-contra.page.scss'],
})
export class RetaContraPage {
  username: string | undefined;
  email: string | undefined;
  message: string | undefined;
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router) {
    // Cargar usuarios desde el archivo JSON
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<{ users: User[] }>('assets/info.json').subscribe(data => {
        this.users = data.users;
        console.log(this.users); // Verifica que los usuarios se carguen correctamente
    });
}


  submitRequest() {
    const user = this.users.find(u => u.email === this.email && u.username === this.username);
    
    if (user) {
      // Si el usuario existe redirige a reset-contra
      this.router.navigate(['/reset-contra'], { state: { email: this.email } });
    } else {
      this.message = 'Usuario o correo electrónico no encontrados.';
    }
  }
}
