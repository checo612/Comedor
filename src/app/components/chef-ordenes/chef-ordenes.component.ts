import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Orden } from '../../models/orden';
import { AngularFireList } from '../../../../node_modules/angularfire2/database';
import { Observable } from '../../../../node_modules/rxjs';
import { access, accessSync } from 'fs';
import { element } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-chef-ordenes',
  templateUrl: './chef-ordenes.component.html',
  styleUrls: ['./chef-ordenes.component.css']
})

export class ChefOrdenesComponent implements OnInit {
  public ordenesList: Array<any> = [];
  public estatus: boolean;

  constructor(private _usuarios: UsuariosService) { }

  ngOnInit() {
    this._usuarios.getOrdenes().subscribe((ordenes: Array<any>) => {
      ordenes.forEach(orden => {
        this.ordenesList.push(...orden.ordenes);
      });
    });
    console.log('ordenesList', this.ordenesList);
  }

  terminado(uid) {
    console.log(uid);
  }


}
