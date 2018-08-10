import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthService } from './services/auth/auth.service';
import { ChefOrdenesComponent } from './components/chef-ordenes/chef-ordenes.component';
import { MisOrdenesComponent } from './components/mis-ordenes/mis-ordenes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard/home', canActivate: [AuthService] },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: PedidosComponent, canActivate: [AuthService] },
      { path: 'chef-ordenes', component: ChefOrdenesComponent, canActivate: [AuthService] },
      { path: 'mis-ordenes', component: MisOrdenesComponent, canActivate: [AuthService] }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard/home', canActivate: [AuthService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
