import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Ejercicio que aparece en la formación, setea una cookie con esa información
  buttonClick(): void{
    localStorage.setItem('usuarioLogado','1');
  }

}
