import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MiOrdenComponent } from './components/mis-ordenes/mi-orden/mi-orden.component';

const routes: Routes = [
  { path: '', component: MiOrdenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
