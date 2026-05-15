import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Lo que escribe el usuario
  email: string = '';
  password: string = '';

  // Aqui guardo el error si algo esta mal
  mensajeError: string = '';

  // Esto sirve para avisarle al componente padre cuando el login es correcto
  @Output() loginExitoso = new EventEmitter<void>();

  aceptar() {
    // Limpio errores previos
    this.mensajeError = '';

    // Validaciones
    if (this.email === '') {
      this.mensajeError = 'El email es obligatorio';
      return;
    }

    if (!this.email.includes('@')) {
      this.mensajeError = 'El email no es valido';
      return;
    }

    if (this.password === '') {
      this.mensajeError = 'El password es obligatorio';
      return;
    }

    // Si todo paso, aviso al padre
    this.loginExitoso.emit();
  }
}