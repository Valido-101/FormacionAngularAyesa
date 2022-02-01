import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Libro } from '../../interfaces/libro';

@Component({
  selector: 'app-expositor-libros',
  templateUrl: './expositor-libros.component.html',
  styleUrls: ['./expositor-libros.component.css']
})
export class ExpositorLibrosComponent implements OnInit {

  //Variables
  modoElegido:string = 'Comprar';
  librosOfrecidos:Libro[] = [];
  //Control de carrito
  carrito: { precioTotal:number, cantidadLibros: number } = { precioTotal: 0, cantidadLibros: 0};

  constructor() { }

  ngOnInit(): void {
    console.log('El componente ha sido iniciado');
    const libro1: Libro = {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 30, stock: 4};
    const libro2: Libro = {titulo: 'El relato de un náufrago', autor: 'Gabriel García Márquez', precio: 20, stock: 7};
    this.librosOfrecidos = [libro1];
    this.librosOfrecidos.push(libro2);
    this.librosOfrecidos.push({titulo: 'El lazarillo de Tormes', precio: 5, stock: 10});
  }

  /**
   * Gestiona la acción y la compra de un libro, sumando su precio
   * y aumentando el número de elementos del carrito
   * @param libro Libro recibido
   */
  libroNotify(libro: Libro){
    this.carrito.precioTotal += libro.precio;
    this.carrito.cantidadLibros++;
  }

}
