import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { map } from 'rxjs/operators';
const lista = 'usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _firebase: AngularFireDatabase) { }
  agregarNombreUsuario(usuario, name) {
    if (usuario) {
      return this._firebase.list(`${lista}/${usuario.uid}`).push({
        id: usuario.uid,
        name: name,
        email: usuario.email,
        lastLoginAt: usuario.metadata.lastSignInTime
      });
    }
  }
  getUsuarios() {
    return this._firebase.list(`${lista}`).snapshotChanges().pipe(
      map(changes => {
        return changes.map(change => {
          return {
            key: change.key,
            ...change.payload.val()};
        });
      })
    );
  }
}
