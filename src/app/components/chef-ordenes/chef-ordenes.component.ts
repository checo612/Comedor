import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-chef-ordenes',
  templateUrl: './chef-ordenes.component.html',
  styleUrls: ['./chef-ordenes.component.css']
})

export class ChefOrdenesComponent implements OnInit {
  public ordenesList: Array<any> = [];
  public estatus: boolean;
  chef;

  constructor(private _usuarios: UsuariosService, private _auth: AuthService) { }

  ngOnInit() {
    this._usuarios.getOrdenes().subscribe((ordenes: Array<any>) => {
      ordenes.forEach(orden => {
        this.ordenesList.push(...orden.ordenes);
      });
    });
    this._auth.usuario.subscribe(usuario => {
      this.chef = usuario.uid;
    });
  }

  terminado(orden) {
    orden.estatus = false;
    this._usuarios.actualizarEstatus(orden);
    console.log('ordenid ' + orden.ordenId);
    console.log('userid ' + orden.userId);

  }


}
