import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { MiOrdenComponent } from './components/mis-ordenes/mi-orden/mi-orden.component';

const routes: Routes = [
  { path: '', component: MiOrdenComponent}
=======
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent}
>>>>>>> b139c401e51bc64cf7b074922434bcb22e050fdd
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
