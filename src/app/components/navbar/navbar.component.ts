import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: string;

  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this._auth.usuario.subscribe(usuario => {
      this.usuario = usuario.email;
    }
  );



    // console.log(this.usuario);
  }

  cerrarSesion() {
    this._auth.cerrarSesion();
  }

}
