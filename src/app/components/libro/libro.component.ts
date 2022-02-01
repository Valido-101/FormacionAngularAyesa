import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  //Evento que emitirá el libro cuando se compre
  @Output() comprado:EventEmitter<Libro> = new EventEmitter();
  //Libro a recibir para poder mostrarlo
  @Input()  libro!: Libro;

  constructor() { }

  ngOnInit(): void {
  }

  comprar(){
    this.comprado.emit(this.libro);
    this.libro.stock--;
  }

}
