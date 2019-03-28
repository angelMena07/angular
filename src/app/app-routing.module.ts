import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/user/inicio/inicio.component';
import { ReservacionComponent } from './components/user/reservacion/reservacion.component';
import { ReservasComponent } from './components/admin/reservas/reservas.component';
import { ContactanosComponent } from './components/user/contactanos/contactanos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: InicioComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'admin/reservas', component: ReservasComponent },
  { path: 'contacto', component: ContactanosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
