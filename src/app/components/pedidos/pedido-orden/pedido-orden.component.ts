import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pedido-orden',
  templateUrl: './pedido-orden.component.html',
  styleUrls: ['./pedido-orden.component.css']
})
export class PedidoOrdenComponent implements OnInit {
  @Input('platillo') platillo;

  constructor() { }

  ngOnInit() {
  }

}
