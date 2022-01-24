import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerProyecto';

  
  constructor(){
    this.cuentaLetras('Angular')
  }

  /**
   * Función que recibe una palabra, cuenta sus letras y las devuelve
   * @param palabra Palabra a evaluar
   * @returns Cantidad de letras
   */
  cuentaLetras(palabra:string):number{
    const cantidadLetras:number = palabra.length;
    return cantidadLetras;
  }
}
