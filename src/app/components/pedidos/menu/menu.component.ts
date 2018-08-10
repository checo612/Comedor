import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platillo } from '../../../models/platillo/platillo.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private orden;
  @Input('platillo') platillo;
  @Output('enviaPlatillo') enviaPlatillo: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  agregarPlatillo() {
    console.log(this.platillo);
    this.enviaPlatillo.emit(this.platillo);
    // return this.platillo;
  }

}
