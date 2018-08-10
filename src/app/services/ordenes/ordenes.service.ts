import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'node_modules/angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { map } from 'node_modules/rxjs/operators';
import { Orden } from '../../models/orden/orden.model';
import { Platillo } from '../../models/platillo/platillo.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  public listaOrdenes: AngularFireList<any>;
  // public listaPlatillos: AngularFireList<any>;
  public userID;
  public now = Date();

  public ordenCompleta;
  public ordenPlatillos: Array<any> = [];

  constructor(
    private _firebase: AngularFireDatabase,
    private _auth: AuthService
  ) {
    this._auth.usuario.subscribe(usuario => {
      this.listaOrdenes = this._firebase.list(`ordenes/${usuario.uid}`);
      // this.listaPlatillos = this._firebase.list(`platillos`);
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


  addOrden(orden) {
    this.ordenCompleta = { estatus: true, platillos: orden };
    return this.listaOrdenes.push(this.ordenCompleta).then(x => {
      this.ordenPlatillos = [];
    });
    // return this.listaPlatillos.push(this.platillos);
  }

  hacerOrden(platillo) {
    // platillo = {id: this.now, platillo: platillo};
    // console.log(platillo);
    return this.ordenPlatillos.push(platillo);
  }

  getOrden() {
    return this.ordenPlatillos;
  }

  removePlatillo(platillo) {
    this.ordenPlatillos.splice(this.ordenPlatillos.findIndex((valor) => {
      return valor.uid === platillo.uid;
    }), 1);
  }

}
