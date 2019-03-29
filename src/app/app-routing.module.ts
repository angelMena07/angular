import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ComentariosComponent } from './components/admin/comentarios/comentarios.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { NosotrosComponent } from './components/user/nosotros/nosotros.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/user/inicio/inicio.component';
import { ReservacionComponent } from './components/user/reservacion/reservacion.component';
import { ReservasComponent } from './components/admin/reservas/reservas.component';
import { ContactanosComponent } from './components/user/contactanos/contactanos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'index', component: InicioComponent},
  { path: 'home', component: InicioComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'about', component: NosotrosComponent },
  { path: 'contact', component: ContactanosComponent },
  { path: 'blog-single', component: BlogComponent },
  { path: 'admin/reservas', component: ReservasComponent },
  { path: 'admin/comentarios', component: ComentariosComponent },
  { path: 'admin/dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
