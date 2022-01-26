import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthedGuard implements CanActivate {

  constructor(
    private router:Router
  ){}

  canActivate(): boolean{
    
    if(localStorage.getItem('usuarioLogado')==='1')
    {
      alert('Usuario ya loggeado');
      this.router.navigate(['/']);
      return false;
    }
    else
    {
      return true;
    }
    
  }
}
