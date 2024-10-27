import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Evita el acceso directo desde la barra de navegación
    this.router.navigate(['/home']);
    return false; // Bloquea el acceso
  }
}
