import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
@Injectable({
  providedIn: 'root'
})

export class navigationService {
  private isNavigationValid = false;
}
export class NavigationGuard implements CanActivate {
  NavigationService: any;

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Aquí podrías personalizar para que el guard valide solo ciertas rutas o comportamientos
    if (!this.NavigationService.getNavigationValid()) { 
      this.router.navigate(['/error404']);
      return false;
    }
    {
      this.router.navigate(['/error404']);
      return false;
    }
    return true;
  }
}
