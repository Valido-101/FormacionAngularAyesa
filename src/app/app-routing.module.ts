import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';

//Rutas a través de las que se accede al componente desde la aplicación
const routes: Routes = [
  {
    path: 'expositor',
    component: ExpositorLibrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
