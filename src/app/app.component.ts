import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'primerProyecto';
  
  constructor(){
    //this.cuentaLetras('Angular')
    console.log('Constructor del componente')
  }

  //Métodos del ciclo de vida de un componente en angular

  ngOnInit(): void {
    
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

  accionaMatDrawer(drawer: MatDrawer): void{
    if(drawer.opened){
      drawer.close();
    }
    else{
      drawer.open();
    }
  }
}
