import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrdenesService } from '../../../services/ordenes/ordenes.service';
import { Platillo } from '../../../models/platillo/platillo.model';
import { Router } from '../../../../../node_modules/@angular/router';
import { Orden } from '../../../models/orden/orden.model';

const listaPlatillos: Array<Platillo> = [];

@Component({
  selector: 'app-pedido-orden',
  templateUrl: './pedido-orden.component.html',
  styleUrls: ['./pedido-orden.component.css']
})
export class PedidoOrdenComponent implements OnInit, OnChanges {
  @Input('platillos') platillos;

  // public listaPlatillos: Array<Orden>;

  constructor(
    private ordenService: OrdenesService,
    private _router: Router) { }

  ngOnInit() {
    console.log(this.platillos);
  }

  ngOnChanges() {
    listaPlatillos.push(this.platillos);
    console.log(listaPlatillos);

  }

  registraOrden() {
    this.ordenService.addOrden(this.platillos);
    this._router.navigate(['/']);
  }

  removePlatillo(platillo) {

  }



}
