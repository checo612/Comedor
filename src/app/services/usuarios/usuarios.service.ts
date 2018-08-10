import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
const lista = 'usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _firebase: AngularFireDatabase) { }
  agregarNombreUsuario(usuario, name) {
    if (usuario) {
      return this._firebase.list(`${lista}`).push({
        id: usuario.uid,
        name: name,
        email: usuario.email,
        lastLoginAt: usuario.metadata.lastSignInTime
      });
    }
  }
}
