import { Comment } from './../../../models/coments.modal';
import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { CommentService } from 'src/app/services/comentarios/comment.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  name = '';
  about = '';
  message = '';

  comment: Comment;

  constructor(private reservasService: CommentService, private afs: AngularFirestore) { }

  ngOnInit() {
  }
  sendComent() {
    const id1= this.afs.createId();
    this.comment = {
      id: id1,
      nombre_comentario: this.name,
      asunto_comentario: this.about,
      comentario: this.message,
    }
    this.reservasService.addComent(id1, this.comment);
  }
}
