import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.component.html',
  styleUrls: ['./mis-ordenes.component.css']
})
export class MisOrdenesComponent implements OnInit {
  @Input('uid') uid: string;

  public ordenes: Array <any> = [
    { uid: '',
      estatus: '',
      platillos: [{
        platillo: 'Lasaña',
        cantidad: ''
      }]

  }
];
  constructor() { }

  ngOnInit() {
  }

}
