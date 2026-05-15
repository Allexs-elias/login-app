import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vista-principal',
  imports: [],
  templateUrl: './vista-principal.html',
  styleUrl: './vista-principal.css'
})
export class VistaPrincipal {

  // Para avisar al padre que se quiere cerrar sesion
  @Output() cerrarSesion = new EventEmitter<void>();

  salir() {
    this.cerrarSesion.emit();
  }
}