import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  message!: string;
  username!: string;
  password!: string;

  constructor(private router: Router) {} // Inject Router

  validateLogin(){
    if(this.username ==='admin'&& this.password ==='12345') {
        this.router.navigate(['/main-page']);
    }else{
      this.message = 'login con error';
    }
  }


  navigateToRegister() {
    this.router.navigate(['/registro']); // Ensure this route exists in your app
  }
}

