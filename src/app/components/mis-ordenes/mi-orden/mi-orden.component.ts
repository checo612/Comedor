import { Component, OnInit, Input } from '@angular/core';
import { OrdenService } from '../../../services/orden/orden.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-mi-orden',
  templateUrl: './mi-orden.component.html',
  styleUrls: ['./mi-orden.component.css']
})
export class MiOrdenComponent implements OnInit {
  @Input('orden') orden: Array<any>;  // Orden;
  // ordenes: any;

  constructor(private ordenService: OrdenService, private _auth: AuthService) { }

  ngOnInit() {
    console.log(this.orden);
    console.log(this.orden);
      // this.ordenes = this.ordenService.getMisOrdenes();
  }

}
