import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Comment } from 'src/app/models/coments.modal';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comentsCollection: AngularFirestoreCollection<Comment>;
  coments: Observable<Comment[]>;

  constructor(private afs: AngularFirestore) { 

  }

  addComent(id, obj) {
    this.comentsCollection = this.afs.collection<Comment>('coment');
    this.coments = this.comentsCollection.valueChanges();
    this.comentsCollection.doc(id).set(obj).then(
      data => {
        console.log(data);
        console.log('exito');
      }, err => console.log(err)
    );
  }

  deleteComent(id) {
    this.comentsCollection = this.afs.collection<Comment>('coment');
    this.coments = this.comentsCollection.valueChanges();
    this.comentsCollection.doc(id).delete();
  }

  updateComent(id, obj) {
    this.comentsCollection = this.afs.collection<Comment>('coment');
    this.coments = this.comentsCollection.valueChanges();
    this.comentsCollection.doc(id).update(obj);
  }




}
