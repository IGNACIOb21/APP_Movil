import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isNavigationValid = false;

  setNavigationValid(valid: boolean) {
    this.isNavigationValid = valid;
  }

  getNavigationValid(): boolean {
    return this.isNavigationValid;
  }
}