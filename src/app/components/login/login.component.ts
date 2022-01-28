import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables de la clase
  //FormGroup para controlar el formulario
  miFormulario: FormGroup;
  //Atributo hide para el botón del campo contraseña
  hide: boolean;

  constructor() {
    this.miFormulario = new FormGroup({
      //Inicializador de controladores (valor inicial, Validador/es)
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    }); 
    this.hide = true;
   }

  ngOnInit(): void {
  }

  //Ejercicio que aparece en la formación, setea una cookie con esa información
  submitForm(): void{
    if(this.miFormulario.get('email')?.value==='jesuszafra22@gmail.com' && this.miFormulario.get('password')?.value==='usuario1usuario'){
      localStorage.setItem('usuarioLogado','1');
      alert('Cookie seteada');
    }else{
      alert('Datos incorrectos')
    }
  }

}
