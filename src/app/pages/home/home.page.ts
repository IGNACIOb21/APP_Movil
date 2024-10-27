import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  navigateTo(page: string) {
    this.navigationService.setNavigationValid(true); // Marcar navegación como válida
    this.router.navigate([`/${page}`]).then(() => {
      this.navigationService.setNavigationValid(false); // Resetear después de la navegación
    });
  }
}
