import { Reservations } from './../../../models/reservas.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReservationService } from './../../../services/reservacion/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {

  name = '';
  email = '';
  size;
  date = '';
  hour: any;

  reservation: Reservations;

  constructor(private reservasService: ReservationService, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  sendReservation() {
    const id1= this.afs.createId();
    this.reservation = {
      id: id1,
      reserva_email: this.email,
      reserva_fecha: this.date,
      reserva_hora: this.hour,
      reserva_nombre: this.name,
      reserva_tamanioGrupo: this.size,
    }
    this.reservasService.addReservation(id1, this.reservation);
  }

}
