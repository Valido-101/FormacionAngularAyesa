import { Component } from '@angular/core';
import { Libro } from './interfaces/libro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerProyecto';

  //Variables
  modoElegido:string = 'Comprar';
  librosOfrecidos:Libro[] = [];
  
  constructor(){
    //this.cuentaLetras('Angular')
    console.log('Constructor del componente')
  }

  //Métodos del ciclo de vida de un componente en angular

  ngOnInit(): void {
    console.log('El componente ha sido iniciado');
    const libro1: Libro = {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 30, stock: 4};
    const libro2: Libro = {titulo: 'El relato de un náufrago', autor: 'Gabriel García Márquez', precio: 20, stock: 7};
    this.librosOfrecidos = [libro1];
    this.librosOfrecidos.push(libro2);
    this.librosOfrecidos.push({titulo: 'El lazarillo de Tormes', precio: 5, stock: 10});
  }

  ngAfterViewInit(): void {
    console.log('La vista HTML ha cargado completamente');
  }

  ngOnDestroy(): void {
    console.log('El componente ha sido destruido');
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

  cambiarModo(modo:string): void {

  }
}
