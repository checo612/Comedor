import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import {
  map
} from 'rxjs/operators';

const nombreLista = 'ordenes';
@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private _auth: AuthService, private _firebase: AngularFireDatabase) { }

  getMisOrdenes() {
    return this._auth.usuario.subscribe(usuario => {
      // this._firebase.list(`${nombreLista}`, query => query.orderByChild('uid').equalTo(usuario.uid)
      this._firebase.list(`${nombreLista}/${usuario.uid}`)
    .snapshotChanges().pipe(
      map(changes => {
          return changes.map(change => {
              return {
                  key: change.key,
                  ...change.payload.val()
              };
          });
      })
  );
    });
}
}
