import { Component, OnInit, Input } from '@angular/core';
import { Platillo } from '../../models/platillo/platillo.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  enviaPlatillo: any;
  platillos = [
    {uid: 1, nombre: 'arroz1', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 2, nombre: 'arroz2', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 3, nombre: 'arroz3', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 4, nombre: 'arroz4', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 5, nombre: 'arroz5', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 6, nombre: 'arroz6', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 7, nombre: 'arroz7', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 8, nombre: 'arroz8', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 9, nombre: 'arroz9', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''},
    {uid: 10, nombre: 'arroz10', imagen: 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/sopa-de-arroz-blanco-con-verduras.jpg', descripcion: ''}
  ];
  constructor() { }

  mostrarPlatillos(platillo) {
    console.log('si');
    this.enviaPlatillo = platillo;
  }

  ngOnInit() {
  }

}
