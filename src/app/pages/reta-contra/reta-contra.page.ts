import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reta-contra',
  templateUrl: './reta-contra.page.html',
  styleUrls: ['./reta-contra.page.scss'],
})
export class RetaContraPage {
  username: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  submitRequest() {
    const requestData = { username: this.username, email: this.email };
    

    this.http.post('/api/reset-password/request', requestData).subscribe(
      (response: any) => {
        this.message = response.message;

        if (response.success) {
          this.router.navigate(['/reset-password-confirm']);
        }
      },
      (error) => {
        this.message = error.error.message || 'Error al restablecer la contraseña.';
      }
    );
  }
}
