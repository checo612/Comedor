import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platillo } from '../../../models/platillo/platillo.model';
import { OrdenesService } from '../../../services/ordenes/ordenes.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private orden;
  @Input('platillo') platillo;
  @Output('enviaPlatillo') enviaPlatillo: EventEmitter<any> = new EventEmitter();

  constructor(
    private ordenService: OrdenesService
  ) { }

  ngOnInit() {
  }

  agregarPlatillo() {
    this.ordenService.hacerOrden(this.platillo);
  }

}
