import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reservations } from 'src/app/models/reservas.modal';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationsCollection: AngularFirestoreCollection<Reservations>;
  reservations: Observable<Reservations[]>;
  constructor(private afs: AngularFirestore) {

  }

 addReservation(id, obj) {
  this.reservationsCollection = this.afs.collection<Reservations>('reservation');
  this.reservations = this.reservationsCollection.valueChanges();
  this.reservationsCollection.doc(id).set(obj).then(
    data => {
      console.log(data);
      console.log('Exito');
    }, err => console.log(err)
  );
 }

 deleteReservation(id) {
  this.reservationsCollection = this.afs.collection<Reservations>('reservation');
  this.reservations = this.reservationsCollection.valueChanges();
  this.reservationsCollection.doc(id).delete();
 }

 updateReservation(id, obj) {
  this.reservationsCollection = this.afs.collection<Reservations>('reservation');
  this.reservations = this.reservationsCollection.valueChanges();
  this.reservationsCollection.doc(id).update(obj);
 }


}
