import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrdenService } from '../../services/orden/orden.service';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.component.html',
  styleUrls: ['./mis-ordenes.component.css']
})
export class MisOrdenesComponent implements OnInit, OnChanges {
  uid: string;
  public ordenes: Array<any>;


  constructor(private ordenService: OrdenService, private _auth: AuthService) {


   }

  ngOnInit() {
    this.ordenService.getMisOrdenes().subscribe(datos => {
      datos.subscribe(valores => {
        this.ordenes = valores;
        this.ordenes.reverse();
      });
    });
  }
  ngOnChanges() {

  }
}
