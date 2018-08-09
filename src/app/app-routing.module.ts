import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisOrdenesComponent } from './components/mis-ordenes/mis-ordenes.component';

const routes: Routes = [
  {path: 'miOrden',
  pathMatch: 'full',
  component: MisOrdenesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
