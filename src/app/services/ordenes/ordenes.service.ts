import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'node_modules/angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { map } from 'node_modules/rxjs/operators';
import { Orden } from '../../models/orden/orden.model';
import { Platillo } from '../../models/platillo/platillo.model';

let ordenCompleta;


@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  public listaOrdenes: AngularFireList<any>;
  public userID;

  constructor(
    private _firebase: AngularFireDatabase,
    private _auth: AuthService
  ) {
    this._auth.usuario.subscribe(usuario => {
      this.listaOrdenes = this._firebase.list(`/ordenes`);
      this.userID = usuario.uid;
    });
   }

   getOrdenes() {
     return this.listaOrdenes.snapshotChanges().pipe(
       map(changes =>
        changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        })))
     );
   }

   addOrden(orden: Orden) {
      ordenCompleta = {usuario: this.userID, estatus: true, platillos: orden};
      // console.log(listaPlatillos);
      return this.listaOrdenes.push(ordenCompleta).then();
   }
}
