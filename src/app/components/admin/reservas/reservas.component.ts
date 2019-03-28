import { ReservationService } from './../../../services/reservacion/reservation.service';
import { Reservations } from './../../../models/reservas.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reservas: Reservations[] = [];
  closeResult: string;

  reserva: Reservations;

  constructor(private afs: AngularFirestore, private reservasService: ReservationService, private modalService: NgbModal) { }


  ngOnInit() {
    this.afs.collection('reservation').valueChanges().subscribe(
      (data: Reservations[]) => {
        this.reservas = data;
        console.log(this.reservas);
      }
    );
  }

  openWindowCustomClass(content, reserva) {
    this.reserva = reserva;
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }


  deleteRes(id) {
    const a = confirm('Estás seguro de borrar?');
    if (a === true) {
      this.reservasService.deleteReservation(id);
    } else {
      alert('Cancelado');
    }
  }


}
