// Aqui traigo la herramienta para crear componentes
import { Component } from '@angular/core';

// Traigo mi componente Login para poder usarlo aqui
import { Login } from './components/login/login';

// Esta etiqueta @Component le dice a Angular: "oye, esto es un componente"
@Component({
  // Mi "nombre" en HTML. Otros archivos me pueden llamar con <app-root>
  selector: 'app-root',

  // Aqui pongo los componentes que voy a usar dentro de mi HTML
  imports: [Login],

  // El archivo donde esta mi HTML
  templateUrl: './app.html',

  // El archivo donde estan mis estilos
  styleUrl: './app.css'
})

// Esta es mi clase, el "cerebro" del componente
// Por ahora esta vacia, despues le pondre logica si la necesito
export class App {

}