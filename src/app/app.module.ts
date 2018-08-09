import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '../../node_modules/@angular/forms';
// firebase
import {
  AngularFireAuthModule
} from 'angularfire2/auth';
import {
  AngularFireDatabaseModule
} from 'angularfire2/database';
import {
  AngularFireModule
} from 'angularfire2';
import {
  environment
} from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MenuComponent } from './components/pedidos/menu/menu.component';
import { PedidoOrdenComponent } from './components/pedidos/pedido-orden/pedido-orden.component';
import { PlatilloComponent } from './components/pedidos/platillo/platillo.component';
import { MisOrdenesComponent } from './components/mis-ordenes/mis-ordenes.component';

import { ChefOrdenesComponent } from './components/chef-ordenes/chef-ordenes.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PedidosComponent,
    MenuComponent,
    PedidoOrdenComponent,
    PlatilloComponent,
    MisOrdenesComponent,
    ChefOrdenesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
