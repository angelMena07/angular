import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/user/inicio/inicio.component';
import { NosotrosComponent } from './components/user/nosotros/nosotros.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { MenuComponent } from './components/user/menu/menu.component';
import { ReservacionComponent } from './components/user/reservacion/reservacion.component';
import { ContactanosComponent } from './components/user/contactanos/contactanos.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ReservasComponent } from './components/admin/reservas/reservas.component';
import { ContactoComponent } from './components/admin/contacto/contacto.component';
import { ComentariosComponent } from './components/admin/comentarios/comentarios.component';
import { LoginsComponent } from './components/admin/logins/logins.component';
import { HeaderComponent } from './components/user/header/header.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    BlogComponent,
    MenuComponent,
    ReservacionComponent,
    ContactanosComponent,
    DashboardComponent,
    ReservasComponent,
    ContactoComponent,
    ComentariosComponent,
    LoginsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule, AngularFirestoreModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
