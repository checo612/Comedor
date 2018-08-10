import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';


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
