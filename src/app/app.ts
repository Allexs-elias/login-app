import { Component } from '@angular/core';
import { Login } from './components/login/login';
import { VistaPrincipal } from './components/vista-principal/vista-principal';

@Component({
  selector: 'app-root',
  imports: [Login, VistaPrincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Bandera para saber si el usuario ya inicio sesion
  estaLogueado: boolean = false;

  // Cuando el login es correcto
  alLoguear() {
    this.estaLogueado = true;
  }

  // Cuando le da clic a Salir
  alSalir() {
    this.estaLogueado = false;
  }
}