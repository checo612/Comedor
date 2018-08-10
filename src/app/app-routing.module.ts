import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MiOrdenComponent } from './components/mis-ordenes/mi-orden/mi-orden.component';
import { MisOrdenesComponent } from './components/mis-ordenes/mis-ordenes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'miOrden', component: MiOrdenComponent},
  { path: 'misOrdenes', component: MisOrdenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
