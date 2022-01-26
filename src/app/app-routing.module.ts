import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionLibroComponent } from './components/creacion-libro/creacion-libro.component';
import { ExpositorLibrosComponent } from './components/expositor-libros/expositor-libros.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthedGuard } from './guards/authed.guard';

//Rutas a través de las que se accede al componente desde la aplicación
const routes: Routes = [
  {
    path: 'expositor',
    component: ExpositorLibrosComponent
  },
  {
    path: 'creacionLibro',
    component: CreacionLibroComponent,
    //Guard creado para comprobar que está loggeado
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
