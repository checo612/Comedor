import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platillo } from '../../../models/platillo/platillo.model';
import { OrdenesService } from '../../../services/ordenes/ordenes.service';

const listaPlatillos: Array<any> = [];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private orden;
  @Input('platillo') platillo;
  @Output('enviaPlatillo') enviaPlatillo: EventEmitter<any> = new EventEmitter();
  // public listaPlatillos: Array<any>;


  constructor(
    private ordenService: OrdenesService
  ) { }

  ngOnInit() {
  }

  agregarPlatillo() {
    listaPlatillos.push(this.platillo.nombre);
    // console.log(this.platillo);
    this.enviaPlatillo.emit(listaPlatillos);
  }

}
