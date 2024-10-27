import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-contra',
  templateUrl: './reset-contra.page.html',
  styleUrls: ['./reset-contra.page.scss'],
})
export class ResetContraPage {
  newPassword: string | undefined;
  message: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  submitNewPassword() {
    const requestData = { newPassword: this.newPassword };


    this.http.post('/api/reset-password/confirm', requestData).subscribe(
      (response: any) => {
        this.message = response.message;
        // Redirigir al login para que el usuario inicie sesión con su nueva contraseña
        this.router.navigate(['/login']);
      },
      (error) => {
        this.message = error.error.message || 'Error al cambiar la contraseña.';
      }
    );
  }
}
