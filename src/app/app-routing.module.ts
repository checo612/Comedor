import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/pedidos/menu/menu.component';
import { MisOrdenesComponent } from './components/mis-ordenes/mis-ordenes.component';
import { ChefOrdenesComponent } from './components/chef-ordenes/chef-ordenes.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu' , component: MenuComponent},
  { path: 'mis_pedidos' , component: MisOrdenesComponent },
  { path: 'listado_ordenes', component: ChefOrdenesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
