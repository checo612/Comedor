import { Component, OnInit, Input } from '@angular/core';
import { Platillo } from '../../models/platillo/platillo.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  // platillosSeleccionados: Array<any> = [];

  platillos = [
    { uid: 1, nombre: 'Budín azteca', imagen: 'http://foodandtravel.mx/home/wp-content/uploads/2018/01/budin-1024x683.jpg', descripcion: '' },
    { uid: 2, nombre: 'Mixteco', imagen: 'http://foodandtravel.mx/home/wp-content/uploads/2018/01/portada.tampi2_.jpg', descripcion: '' },
    { uid: 3, nombre: 'Sábana a la tampiqueña', imagen: 'http://foodandtravel.mx/home/wp-content/uploads/2018/01/tampi.jpg', descripcion: '' },
    { uid: 4, nombre: 'Consomé ranchero', imagen: 'http://foodandtravel.mx/home/wp-content/uploads/2018/01/sopadepollo.jpg', descripcion: '' },
    { uid: 5, nombre: 'Huachinango a la veracruzana', imagen: 'http://foodandtravel.mx/home/wp-content/uploads/2018/01/pescado.jpg', descripcion: '' },
    { uid: 6, nombre: 'Tamales oaxaqueños', imagen: 'http://foodandtravel.mx/home/wp-content/uploads/2018/01/tamal-1024x683.jpg', descripcion: '' },
    { uid: 7, nombre: 'Pozole Grande', imagen: 'http://foodandtravel.mx/home/wp-content/uploads/2017/08/shutterstock_378385984.jpg', descripcion: '' },
    { uid: 8, nombre: 'Chile en nogada', imagen: 'http://cdn2.bienysaludable.com/sites/default/files/styles/gallerie/public/images/2017/09/chile1.jpg', descripcion: '' },
    { uid: 9, nombre: 'Enchiladas', imagen: 'http://cdn2.bienysaludable.com/sites/default/files/styles/gallerie/public/istock-147030369.jpg', descripcion: '' },
    { uid: 10, nombre: 'Quesadillas de Huitlacoche', imagen: 'http://cdn2.bienysaludable.com/sites/default/files/styles/gallerie/public/istock-540977794.jpg', descripcion: '' },
  ];

  constructor() { }
  p = 1;

  ngOnInit() {
  }

}
