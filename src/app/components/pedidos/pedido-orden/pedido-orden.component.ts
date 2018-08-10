import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { OrdenesService } from '../../../services/ordenes/ordenes.service';
import { Platillo } from '../../../models/platillo/platillo.model';
import { Router } from '../../../../../node_modules/@angular/router';
import { Orden } from '../../../models/orden/orden.model';

@Component({
  selector: 'app-pedido-orden',
  templateUrl: './pedido-orden.component.html',
  styleUrls: ['./pedido-orden.component.css']
})
export class PedidoOrdenComponent implements OnInit, OnChanges {
  private listaOrden;

  constructor(
    private ordenService: OrdenesService,
    private _router: Router) { }

  ngOnInit() {}

  ngOnChanges() {}

  obtenerPlatillos() {
    return this.ordenService.getOrden();
  }

  removePlatillo(platillo) {
    this.ordenService.removePlatillo(platillo);
  }

  /* Cambio funcion a modal confirmar
  registraOrden() {
    this.ordenService.addOrden(this.obtenerPlatillos());
    this._router.navigate(['/dashboard/platillos']);
  }
  */
}
