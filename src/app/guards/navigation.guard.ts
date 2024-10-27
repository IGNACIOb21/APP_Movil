import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service'; // Asegúrate de que esta ruta es correcta y que navigation.service.ts existe en esa ubicación

@Injectable({
  providedIn: 'root'
})
export class NavigationGuard implements CanActivate {

  constructor(
    private router: Router,
    private navigationService: NavigationService // Asegúrate de que esta línea esté exactamente así
  ) {}

  canActivate(): boolean {
    if (!this.navigationService.getNavigationValid()) { // Verifica el acceso al servicio aquí
      this.router.navigate(['/error404']);
      return false;
    }
    return true;
  }
}