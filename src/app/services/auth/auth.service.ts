import {
  Injectable
} from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import {
  map,
  catchError
} from 'rxjs/operators';
import * as firebase from 'firebase';
import {
  AngularFireAuth
} from 'angularfire2/auth';
import {
  UsuariosService
} from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public usuario: Observable<firebase.User>;
  private _uid: string;

  constructor(private _fireAuth: AngularFireAuth, private _router: Router, private _usuarios: UsuariosService) {
    this.usuario = this._fireAuth.authState;
  }

  iniciarSesion(email: string, password: string) {
    return this._fireAuth.auth.signInWithEmailAndPassword(email, password);

  }

  crearCuenta(email: string, password: string, name: string) {
    return this._fireAuth.auth.createUserWithEmailAndPassword(email, password).then((usuario: firebase.auth.UserCredential) => {
      return this._usuarios.agregarNombreUsuario(usuario.user, name);
    });
  }

  cerrarSesion(usuario) {
  }

  canActivate() {
    return this.usuario.pipe(
      map(usuario => {
        if (usuario) {
          return true;
        } else {
          this._router.navigate(['/acceso']);
          return false;
        }
      }),
      catchError((err) => {
        this._router.navigate(['/acceso']);
        return of(false);
      })
    );
  }
}
