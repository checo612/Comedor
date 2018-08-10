import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  images: Array<string> = [
    'https://dcf54aygx3v5e.cloudfront.net/35c5f64e-d137-45e8-a1e4-83d0cf1e97fb/f53917c0-15b9-41aa-8efc-f62d0fc6edc8.jpg',
    'https://d3ciwvs59ifrt8.cloudfront.net/51ba3254-c423-4a50-8b7a-f487b669106d/2bf27b0f-3b7b-44b1-9e15-58564d675e8a_l.jpg',
    'https://d3ciwvs59ifrt8.cloudfront.net/51ba3254-c423-4a50-8b7a-f487b669106d/a50a0866-35c1-4d60-ad10-f5046839511a.jpg'
  ];
  // vatiable para la validacion para logear o crear usuario
  public login = true;
  // variable para guardar el si aparece un error
  public error: string;
  // variable para el proceso de de login (se coloca para que el usuario no de click muchas veces al boton si la pagina tarda en cargar)
  public procesando = false;
  // variables para el registro
  public email: string;
  public password: string;
  public name: string;
  // ==========================
  constructor(private config: NgbCarouselConfig, private _auth: AuthService, private _router: Router) {
  }
  ngOnInit() {
  }
  // configuracion para el carrusel
  confuguracionCarrusel() {
    this.config.interval = 500;
    this.config.wrap = false;
    this.config.keyboard = false;
    this.config.pauseOnHover = false;
    this.config.showNavigationArrows = false;
  }
  // cambia la pantalla entre el login y el registro
  cambio() {
    this.login = !this.login;
  }
  // inicion de secion
  iniciarSesion() {
    if (!this.email || !this.password) {
      this.error = 'Por favor valida que hayas llenado todos los campos';
      return;
    }
    this.procesando = true;
    this._auth.iniciarSesion(this.email, this.password).then(() => {
      this._router.navigate(['/dashboard/home']);
    }).catch(err => {
      console.error(err);
      this.error = 'Ocurrió un error al iniciar sesión, por favor valida tus credenciales y vuelve a intentar';
    }).then(() => this.procesando = false);
  }
  // crear nuevo registro
  crearCuenta() {
    if (!this.email || !this.password || !this.name) {
      this.error = 'Por favor valida que hayas llenado todos los campos';
      return;
    }
    this.procesando = true;
    this._auth.crearCuenta(this.email, this.password, this.name).then(() => {
      this._router.navigate(['/dashboard/home']);
    }).catch(err => {
      console.log(err);
      this.error = 'Ocurrió un error al registrar tu cuenta, por favor valida la información y vuelve a intentarlo';
    })
      .then(() => this.procesando = false);
  }

}
