// Traigo la herramienta de componentes
import { Component } from '@angular/core';

// Traigo FormsModule para usar ngModel
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Variables del formulario
  email: string = '';
  password: string = '';

  // Variable para guardar el mensaje de error
  // Si esta vacia no se muestra nada en pantalla
  mensajeError: string = '';

  // Funcion que se ejecuta al hacer clic en Aceptar
  aceptar() {

    // Primero limpio cualquier error anterior
    this.mensajeError = '';

    // Reviso si el email esta vacio
    if (this.email === '') {
      this.mensajeError = 'El email es obligatorio';
      return; // salgo de la funcion, no sigo
    }

    // Reviso si el email no tiene @ (no es un email valido)
    if (!this.email.includes('@')) {
      this.mensajeError = 'El email no es valido';
      return;
    }

    // Reviso si el password esta vacio
    if (this.password === '') {
      this.mensajeError = 'El password es obligatorio';
      return;
    }

    // Si llego hasta aqui, todo esta bien
    console.log('Login correcto!');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}