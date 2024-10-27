import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  message!: string;
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      rut: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repitePassword: ['', Validators.required],
    }, { validator: this.passwordsMatch }); 
  }

  ngOnInit() {}

  passwordsMatch(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const repitePassword = formGroup.get('repitePassword')?.value;

    return password === repitePassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.message = 'Registro exitoso'; 
      this.navCtrl.navigateRoot('/home');
    } else {
      this.message = 'Por favor, complete todos los campos correctamente.'; 
      if (this.registroForm.errors?.['mismatch']) {
        this.message = 'Las contraseñas no coinciden.';
      }
    }
  }
  
}
