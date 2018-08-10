import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '../../../../node_modules/angularfire2/database';
import { map } from 'rxjs/operators';
const lista = 'usuarios';
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  public listaOrdenes: AngularFireList<any>;


  constructor(private _firebase: AngularFireDatabase) {
    this.listaOrdenes = this._firebase.list(`ordenes`);
  }

  getOrdenes() {
    return this.listaOrdenes. // variable BD
      snapshotChanges() // te crea una imagen de los datos de la BD
      .pipe(       // funcion que se correra con los datos obtenidos de la BD, agrega funcion extra
        map(changes => {  // map --> te mapea los datos regresa
          return changes
            .map(change => {
              const ordenesSinFormato = change.payload.val();
              return {
                usuario: change.key,
                ordenes: Object.keys(ordenesSinFormato).map(key => {
                  const ordenFormato = ordenesSinFormato[key];
                  ordenFormato['userId'] = change.key;
                  ordenFormato['ordenId'] = key;
                  return ordenesSinFormato[key];
                })
              };
            });
        }
        )
      );
  }

  ordenTerminada(ordenid) {
    alert('');
    console.log('terminada');
  }

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

