import { Component, OnInit, Input } from '@angular/core';
import { OrdenService } from '../../../services/orden/orden.service';

@Component({
  selector: 'app-mi-orden',
  templateUrl: './mi-orden.component.html',
  styleUrls: ['./mi-orden.component.css']
})
export class MiOrdenComponent implements OnInit {
  @Input('orden') orden: any;  // Orden;
  ordenes: any;

  constructor(private ordenService: OrdenService) { }

  ngOnInit() {
    this.ordenes = this.ordenService.getMisOrdenes();
  }

}
