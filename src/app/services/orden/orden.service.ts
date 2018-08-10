import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase, AngularFireList } from '../../../../node_modules/angularfire2/database';
import {
  map
} from 'rxjs/operators';

const nombreLista = 'ordenes';
@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  lista: AngularFireList<any>;
  constructor(private _auth: AuthService, private _firebase: AngularFireDatabase) { }

  getMisOrdenes() {
    console.log('obtener');
    return this._auth.usuario.pipe( // Cuando alguien se subscribe se ejecuta primero este pipe
      map(
        usuario => {
          return this._firebase.list(`${nombreLista}/${usuario.uid}`)
            .snapshotChanges() // regresa un observable
            .pipe(
              map(changes => {
                return changes.map(change => {
                  return {
                    key: change.key,
                    ...change.payload.val()
                  };
                });
              })
            );
        })
    );
  }
}
